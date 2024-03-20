import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: Date): string => {
  const dateObject = new Date(dateString);
  const formattedDate = format(dateObject, "dd MMM, yyyy");
  return formattedDate;
};

export const formatRelativeTime = (dateString: Date): string => {
  const dateObject = new Date(dateString);
  const relativeTime = formatDistanceToNow(dateObject, { addSuffix: true });
  return relativeTime;
};

export const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const formatDateTime = (dateObject: Date): string => {
  const formattedDate = format(dateObject, "dd MMM, yyyy");
  return formattedDate;
};

export const formatFileSize = (sizeInKBs: number): string => {
  if (sizeInKBs < 1024 * 1024) {
    return `${(sizeInKBs / 1024).toFixed(0)} KB`;
  } else {
    const sizeInMb: number = sizeInKBs / (1024 * 1024);
    return `${sizeInMb.toFixed(2)} MB`;
  }
};
