"use client";
import { auth } from "@/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const syncFirebaseAuth = async (session: Session) => {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken);
    } catch (e) {
      console.error("Failed to sync firebase auth", e);
    }
  } else {
    auth.signOut();
  }
};

export default function FirebaseAuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    syncFirebaseAuth(session);
  }, [session]);

  return <>{children}</>;
}
