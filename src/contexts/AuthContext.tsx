import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, User, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  role: 'user' | 'admin' | null;
  loading: boolean;
  error: string | null;
  clearError: () => void;
  loginWithGoogle: () => Promise<void>;
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
        // Check if user exists in Firestore, if not create them
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          setRole(userSnap.data().role);
        } else {
          // Default role is 'user'. The first admin must be bootstrapped via rules or manually.
          // If the email matches the default admin, we could set it to admin, but let's stick to 'user'
          // and let the rules handle the actual permission. We'll just store 'user' for now.
          const initialRole = currentUser.email === 'dobardzicilijas123@gmail.com' ? 'admin' : 'user';
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
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Error signing in with Google", error);
      if (error.code === 'auth/popup-closed-by-user') {
        setError("Prijava je prekinuta. Molimo vas da ne zatvarate iskačući prozor dok se prijava ne završi.");
      } else if (error.code === 'auth/cancelled-popup-request') {
        setError("Više zahtjeva za prijavu je pokrenuto. Molimo pokušajte ponovo.");
      } else {
        setError("Došlo je do greške prilikom prijave. Pokušajte ponovo.");
      }
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
    <AuthContext.Provider value={{ user, role, loading, error, clearError, loginWithGoogle, logout }}>
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
