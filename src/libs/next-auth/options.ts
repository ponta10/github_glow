import GithubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";

export const nextAuthOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
      authorization: {
        params: { scope: 'read:user,user:email,repo' },
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account }) {
      if (account && account.access_token) {
        token.accessToken = account.access_token;
        token.githubName = account.login;
      }
      return token;
    },
    session({ session, token }: { session: any; token: any }) {
      session.accessToken = token.accessToken;
      session.githubName = token.githubName;
      return session;
    },
  },
};
