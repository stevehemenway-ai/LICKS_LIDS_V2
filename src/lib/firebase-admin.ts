
import { initializeApp, getApps, cert, type App, type ServiceAccount } from 'firebase-admin/app';

let serviceAccount: ServiceAccount | undefined;

try {
  // IMPORTANT: This file is not committed to source control.
  // You need to download it from your Firebase project settings.
  serviceAccount = require('../../firebase-service-account.json');
} catch (e) {
  // In a deployed environment (like Firebase), the service account is often
  // configured via environment variables, so we don't need the file.
  console.log('Service account key file not found, attempting to initialize with default credentials.');
}

const appName = 'firebase-admin-app';
let app: App;

if (getApps().find(app => app.name === appName)) {
  app = getApps().find(app => app.name === appName)!;
} else {
  app = initializeApp({
    credential: serviceAccount ? cert(serviceAccount) : undefined, // Use cert if file exists
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  }, appName);
}

export { app };
