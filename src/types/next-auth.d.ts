import { DefaultSession } from "next-auth";
import { AppUserRole } from "@/types/auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: AppUserRole;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: AppUserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: AppUserRole;
  }
}

export {};
