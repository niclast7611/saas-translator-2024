import admin from 'firebase-admin';
import { initFirestore } from '@auth/firebase-adapter';

let app;

if(!admin.apps.length){
    app = admin.initializeApp({
        credential: admin.credential.cert({
            privateKey: process.env.FIREBASE_PRIVATE_KEY!,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!
        }),
    });
}

const adminDb = initFirestore({
    credential: admin.credential.cert({
        privateKey: process.env.FIREBASE_PRIVATE_KEY!,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!
    }),
})

const adminAuth = admin.auth(app);

export { adminDb, adminAuth }
