
/**
 * @fileoverview A service for managing the public gallery of portraits.
 * This is a simplified in-memory "database" for demonstration purposes.
 * In a real application, you would replace this with a proper database
 * like Firestore, PostgreSQL, etc.
 */
'use server';

export interface Portrait {
    id: string;
    petName: string;
    hatStyle: string;
    portraitDataUri: string;
    votes: number;
    createdAt: Date;
}

// In-memory store for gallery portraits
const galleryPortraits: Portrait[] = [
    { id: '1', petName: 'Buddy', hatStyle: 'Cowboy Hat', votes: 128, portraitDataUri: 'https://placehold.co/500x500.png', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1) },
    { id: '2', petName: 'Lucy', hatStyle: 'Wizard Hat', votes: 99, portraitDataUri: 'https://placehold.co/500x500.png', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2) },
    { id: '3', petName: 'Max', hatStyle: 'Top Hat', votes: 210, portraitDataUri: 'https://placehold.co/500x500.png', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3) },
    { id: '4', petName: 'Daisy', hatStyle: 'Beanie', votes: 74, portraitDataUri: 'https://placehold.co/500x500.png', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4) },
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
export async function addPortraitToGallery(data: { petName: string; hatStyle: string; portraitDataUri: string; }): Promise<void> {
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

/**
 * Increments the vote count for a specific portrait.
 * @param portraitId The ID of the portrait to vote for.
 * @returns A promise that resolves when the vote has been counted.
 */
export async function updateVoteCount(portraitId: string): Promise<void> {
    // Simulate async network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const portrait = galleryPortraits.find(p => p.id === portraitId);
    if (portrait) {
        portrait.votes += 1;
    } else {
        // In a real app, you'd handle this error more gracefully
        throw new Error('Portrait not found');
    }
}
