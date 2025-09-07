import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'licks-lids-v2.appspot.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '4.5mb', // Allow larger image uploads
    },
  },
  // Make the FIREBASE_SERVICE_ACCOUNT environment variable available to the server runtime.
  // This is essential for the Firebase Admin SDK to initialize correctly on the published site.
  env: {
    FIREBASE_SERVICE_ACCOUNT: process.env.FIREBASE_SERVICE_ACCOUNT,
  },
};

export default nextConfig;
