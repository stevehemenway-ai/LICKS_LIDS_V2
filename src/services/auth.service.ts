

/**
 * @fileoverview A service for managing user authentication and roles.
 */
'use server';

import { doc, getDoc } from 'firebase/firestore';
import { getFirestore, initializeFirestore } from 'firebase-admin/firestore';
import { app } from '@/lib/firebase-admin';

// Initialize Firestore on the server
const db = getFirestore(app);
const usersCollection = 'users';

export type UserRole = 'admin' | 'user';

/**
 * Checks if a user has the 'admin' role.
 * @param uid The user's ID.
 * @returns A promise that resolves to true if the user is an admin, false otherwise.
 */
export async function isAdmin(uid: string): Promise<boolean> {
    try {
        const userDocRef = doc(db, usersCollection, uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists() && userDoc.data()?.role === 'admin') {
            return true;
        }
        return false;
    } catch (error) {
        console.error("Error checking admin status:", error);
        return false;
    }
}
