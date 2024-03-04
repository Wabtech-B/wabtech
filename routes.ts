/**
 * An array of strings representing the routes that are protected and require authentication.
 * @type {string[]}
 */
export const protectedRoutes: string[] = [
  "/dashboard",
  "/dashboard/templates",
  "/dashboard/purchases",
  "/dashboard/account",
];

/**
 * An array of  routes ithat are used for authentication.
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
];

/**
 * The prefix for API authentication endpoints.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default login redirect URL.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT_URL: string = "/dashboard";
