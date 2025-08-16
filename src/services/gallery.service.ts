
/**
 * @fileoverview A service for managing the public gallery of portraits using Firebase.
 */
'use server';

import { initializeApp, getApps, type FirebaseOptions } from 'firebase/app';
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc, 
    doc, 
    updateDoc, 
    increment,
    orderBy,
    query,
    Timestamp,
    serverTimestamp
} from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from '@/lib/firebase';

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const portraitsCollection = collection(db, 'portraits');

export interface Portrait {
    id: string;
    petName: string;
    hatStyle: string;
    imageUrl: string;
    votes: number;
    createdAt: Timestamp;
}

/**
 * Retrieves all portraits from the gallery, sorted by creation date.
 * @returns A promise that resolves to an array of portraits.
 */
export async function getGalleryPortraits(): Promise<Portrait[]> {
    const q = query(portraitsCollection, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
        return [];
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Portrait));
}

/**
 * Adds a new portrait to the gallery. This involves uploading the image to
 * Firebase Storage and then creating a new document in Firestore.
 * @param data - The data for the new portrait.
 * @returns A promise that resolves when the portrait has been added.
 */
export async function addPortraitToGallery(data: { petName: string; hatStyle: string; portraitDataUri: string; }): Promise<void> {
    
    // 1. Upload image to Firebase Storage
    const { portraitDataUri, petName, hatStyle } = data;
    const storageRef = ref(storage, `portraits/${Date.now()}_${petName.replace(/\s+/g, '_')}.png`);
    
    // The data URI needs to be stripped of its prefix before uploading
    const uploadData = portraitDataUri.startsWith('data:') 
        ? portraitDataUri.split(',')[1] 
        : portraitDataUri;
    
    const snapshot = await uploadString(storageRef, uploadData, 'base64', {
        contentType: 'image/png'
    });

    // 2. Get the public URL of the uploaded image
    const imageUrl = await getDownloadURL(snapshot.ref);

    // 3. Create a new document in Firestore
    await addDoc(portraitsCollection, {
        petName,
        hatStyle,
        imageUrl, // Store the URL, not the data URI
        votes: 0,
        createdAt: serverTimestamp(),
    });
}

/**
 * Increments the vote count for a specific portrait.
 * @param portraitId The ID of the portrait to vote for.
 * @returns A promise that resolves when the vote has been counted.
 */
export async function updateVoteCount(portraitId: string): Promise<void> {
    const portraitRef = doc(db, 'portraits', portraitId);
    await updateDoc(portraitRef, {
        votes: increment(1)
    });
}
