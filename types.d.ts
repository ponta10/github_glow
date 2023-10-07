import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    githubName?: string;
    user: DefaultSession;
    error?: string;
  }
}