
/**
 * @fileoverview A temporary service for seeding the database with test data.
 * This should be removed before deploying to production.
 */
'use server';

import { initializeApp, getApps } from 'firebase/app';
import { 
    getFirestore, 
    collection, 
    addDoc, 
    serverTimestamp,
    getDocs,
    writeBatch
} from 'firebase/firestore';
import { firebaseConfig } from '@/lib/firebase';

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

const portraitsCollection = collection(db, 'portraits');

// Sample data for seeding
const samplePortraits = [
  {
    petName: 'Barnaby',
    hatStyle: 'Top Hat',
    imageUrl: 'https://placehold.co/512x512.png',
    votes: 12,
  },
  {
    petName: 'Penelope',
    hatStyle: 'Crown',
    imageUrl: 'https://placehold.co/512x512.png',
    votes: 28,
  },
  {
    petName: 'Winston',
    hatStyle: 'Detective Hat',
    imageUrl: 'https://placehold.co/512x512.png',
    votes: 5,
  },
];

/**
 * Seeds the database with sample portraits.
 * To avoid duplicates, it first clears the existing portraits.
 * WARNING: This is a destructive operation.
 */
export async function seedDatabase(): Promise<void> {
  console.log('Starting database seed...');

  // To prevent adding duplicates, we can clear existing portraits first.
  // In a real app, you might want a more sophisticated check.
  const existingPortraits = await getDocs(portraitsCollection);
  if (!existingPortraits.empty) {
    const batch = writeBatch(db);
    existingPortraits.docs.forEach(doc => {
        // Note: This doesn't delete from Storage, just Firestore.
        // For this test utility, that's acceptable.
        batch.delete(doc.ref);
    });
    await batch.commit();
    console.log('Cleared existing portraits.');
  }


  // Add the new sample portraits
  const promises = samplePortraits.map(portrait => {
    return addDoc(portraitsCollection, {
      ...portrait,
      createdAt: serverTimestamp(),
    });
  });

  await Promise.all(promises);
  console.log('Database seeded successfully with sample portraits.');
}
