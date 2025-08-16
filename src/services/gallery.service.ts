/**
 * @fileoverview A service for managing the public gallery of portraits.
 * This is a simplified in-memory "database" for demonstration purposes.
 * In a real application, you would replace this with a proper database
 * like Firestore, PostgreSQL, etc.
 */
'use server';

export interface Portrait {
    id: string;
    dogName: string;
    hatStyle: string;
    portraitDataUri: string;
    votes: number;
    createdAt: Date;
}

// In-memory store for gallery portraits
const galleryPortraits: Portrait[] = [
    { id: '1', dogName: 'Buddy', hatStyle: 'Cowboy Hat', votes: 128, portraitDataUri: 'https://placehold.co/500x500.png', createdAt: new Date() },
    { id: '2', dogName: 'Lucy', hatStyle: 'Wizard Hat', votes: 99, portraitDataUri: 'https://placehold.co/500x500.png', createdAt: new Date() },
    { id: '3', dogName: 'Max', hatStyle: 'Top Hat', votes: 210, portraitDataUri: 'https://placehold.co/500x500.png', createdAt: new Date() },
    { id: '4', dogName: 'Daisy', hatStyle: 'Beanie', votes: 74, portraitDataUri: 'https://placehold.co/500x500.png', createdAt: new Date() },
];


/**
 * Retrieves all portraits from the gallery, sorted by creation date.
 * @returns A promise that resolves to an array of portraits.
 */
export async function getGalleryPortraits(): Promise<Portrait[]> {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...galleryPortraits].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

/**
 * Adds a new portrait to the gallery.
 * @param data - The data for the new portrait.
 * @returns A promise that resolves when the portrait has been added.
 */
export async function addPortraitToGallery(data: { dogName: string; hatStyle: string; portraitDataUri: string; }): Promise<void> {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newPortrait: Portrait = {
        id: (galleryPortraits.length + 1).toString(),
        ...data,
        votes: 0,
        createdAt: new Date(),
    };

    galleryPortraits.unshift(newPortrait); // Add to the beginning of the array
}
