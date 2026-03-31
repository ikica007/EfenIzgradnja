import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export function useContent(sectionId: string, defaultContent: any) {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const docRef = doc(db, 'content', sectionId);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setContent({ ...defaultContent, ...docSnap.data() });
      } else {
        setContent(defaultContent);
      }
    }, (error) => {
      console.error(`Error fetching content for ${sectionId}:`, error);
    });

    return () => unsubscribe();
  }, [sectionId]);

  return content;
}
