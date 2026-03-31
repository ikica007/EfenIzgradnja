import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

export interface Notification {
  id: string;
  title: string;
  message: string;
  createdAt: any;
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }

    const q = query(
      collection(db, 'notifications'),
      orderBy('createdAt', 'desc'),
      limit(20)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notifs: Notification[] = [];
      snapshot.forEach((doc) => {
        notifs.push({ id: doc.id, ...doc.data() } as Notification);
      });
      setNotifications(notifs);
      
      // Simple logic: if there are notifications, we can just show the count.
      // A real app would track read status per user, but for now we just show the total count
      // or we can store a "lastRead" timestamp in local storage.
      const lastReadStr = localStorage.getItem(`lastRead_${user.uid}`);
      const lastRead = lastReadStr ? parseInt(lastReadStr, 10) : 0;
      
      const unread = notifs.filter(n => {
        const time = n.createdAt?.toMillis ? n.createdAt.toMillis() : 0;
        return time > lastRead;
      }).length;
      
      setUnreadCount(unread);
    }, (error) => {
      console.error('Error fetching notifications:', error);
    });

    return () => unsubscribe();
  }, [user]);

  const markAsRead = () => {
    if (user) {
      localStorage.setItem(`lastRead_${user.uid}`, Date.now().toString());
      setUnreadCount(0);
    }
  };

  return { notifications, unreadCount, markAsRead };
}
