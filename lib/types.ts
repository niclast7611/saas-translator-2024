import { DefaultSession } from "next-auth";
export interface Tier {
    name: string;
    id: string | null;
    href:string;
    priceMonthly: string | null;
    description: string;
    features:string[];
  }
  declare module "next-auth" {
      interface Session {
          firebaseToken?: string;
          user:{
              id: string;
  
          }& DefaultSession["user"]
      }
  }
  
  export interface User  {
    name: string,
    email: string,
    image: string,
    id: string
  }