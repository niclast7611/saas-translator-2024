import { FirestoreAdapter } from "@auth/firebase-adapter"
import GoogleProvider from "next-auth/providers/google";
import { adminAuth, adminDb } from "./firebase-admin";
import { NextAuthOptions } from "next-auth";

export const authOptions:NextAuthOptions ={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks:{
        session:async({session,token}) => {
            if(session?.user){
                if(token.sub){
                    session.user.id = token.sub

                    const firebaseToken = await adminAuth.createCustomToken(token.sub)
                    session.firebaseToken = firebaseToken
                }
            }
            return session
        },
        jwt:async({token, user}) => {
            if(user){
                token.sub = user.id
            }
            return token
        }
    },
    session: {
        strategy: "jwt",
    },
    adapter: FirestoreAdapter(adminDb) as any
} satisfies NextAuthOptions