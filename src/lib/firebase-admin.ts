import { initializeApp, getApps, App, cert, ServiceAccount } from 'firebase-admin/app';
import { getStorage, Storage } from 'firebase-admin/storage';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let adminApp: App | undefined;
let adminStorage: Storage | undefined;
let adminDb: Firestore | undefined;

// Construct the service account object from environment variables
// This is the recommended, secure way to handle credentials.
const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

function initializeAdmin() {
  // Check if the required environment variables are set.
  // This prevents the app from crashing in environments where they are not available.
  if (!serviceAccount.projectId || !serviceAccount.privateKey || !serviceAccount.clientEmail) {
    console.warn(
      'Firebase Admin SDK environment variables are not set. Firebase Admin features will be disabled.'
    );
    return;
  }
  
  try {
    if (!getApps().some((app) => app.name === 'admin')) {
      adminApp = initializeApp(
        {
          credential: cert(serviceAccount),
          storageBucket: `${serviceAccount.projectId}.appspot.com`,
        },
        'admin'
      );
      adminStorage = getStorage(adminApp);
      adminDb = getFirestore(adminApp);
      console.log('Firebase Admin SDK initialized successfully.');
    } else {
      adminApp = getApps().find((app) => app.name === 'admin');
      if (adminApp) {
        adminStorage = getStorage(adminApp);
        adminDb = getFirestore(adminApp);
      }
    }
  } catch (error) {
    console.error(
      'CRITICAL: A critical error occurred during Firebase Admin SDK initialization:',
      error
    );
  }
}

// Run the initialization
initializeAdmin();

export { adminApp, adminStorage, adminDb };
