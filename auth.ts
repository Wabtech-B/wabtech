import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prismadb";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, session, trigger }) {
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }

      // Update user in the database
      await prisma.user.update({
        where: {
          id: token.sub,
        },
        data: {
          name: token.name,
          image: token.picture,
        },
      });

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
