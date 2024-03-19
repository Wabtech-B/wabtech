import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
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

      if (session.user) {
        session.user.name = token.name;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, session, trigger }) {
      if (trigger === "update" && (session?.name || session.image)) {
        token.name = session.name;
        token.picture = session.image;
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

      if (!token.sub) return token;

      const existingUser = await prisma.user.findUnique({
        where: { id: token.sub },
      });

      if (!existingUser) return token;

      token.name = existingUser.name;
      token.picture = existingUser.image;
      token.email = existingUser.email;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  ...authConfig,
});
