
import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';

// IMPORTANT: Path to your service account key file
// You need to download this from your Firebase project settings
// and place it in your project root.
const serviceAccount = require('../../firebase-service-account.json'); 

const appName = 'firebase-admin-app';

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceAccount),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  }, appName);
} else {
  app = getApps().find(app => app.name === appName)!;
}

export { app };
