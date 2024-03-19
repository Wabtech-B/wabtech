"use server";

import { prisma } from "@/lib/prismadb";

// ---------------------------- REMOVE PROFILE IMAGE ----------------------------------------------------------------------------------
export const removeImage = async (userId: string) => {
  try {
    await prisma.user.update({ where: { id: userId }, data: { image: null } });
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
