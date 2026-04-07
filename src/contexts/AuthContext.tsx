import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, User, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  role: 'user' | 'admin' | null;
  loading: boolean;
  error: string | null;
  clearError: () => void;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  registerWithEmail: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<'user' | 'admin' | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          setRole(userSnap.data().role);
        } else {
          // Vlasnik sajta i vi automatski postajete admini
          const initialRole = (currentUser.email === 'dobardzicilijas123@gmail.com' || currentUser.email === 'efencolor@gmail.com') ? 'admin' : 'user';
          await setDoc(userRef, {
            uid: currentUser.uid,
            email: currentUser.email,
            role: initialRole,
            createdAt: new Date().toISOString()
          });
          setRole(initialRole);
        }
      } else {
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Error signing in with Google", error);
      setError("Došlo je do greške prilikom prijave sa Google-om.");
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (error: any) {
      console.error("Greška pri prijavi", error);
      setError("Pogrešan email ili lozinka.");
      throw error;
    }
  };

  const registerWithEmail = async (email: string, pass: string) => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (error: any) {
      console.error("Greška pri registraciji", error);
      setError("Greška pri registraciji. Možda email već postoji ili je lozinka preslaba.");
      throw error;
    }
  };

  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
      setError("Došlo je do greške prilikom odjave.");
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{ user, role, loading, error, clearError, loginWithGoogle, loginWithEmail, registerWithEmail, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
