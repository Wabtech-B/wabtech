/* eslint-disable react/no-unescaped-entities */
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const SocialButtons = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT_URL,
    });
  };

  return (
    <>
      {(pathname === "/sign-up" || pathname === "/sign-in") && (
        <>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex-align-center">
                <div className="border-t border-t-border w-full" />
              </div>
              <div className="relative flex-center-center text-sm">
                <span className="bg-background z-10 text-center px-2">
                  Or Continue with
                </span>
              </div>
            </div>
            <div className="flex-align-center mt-4 gap-x-3">
              <Button
                className="flex-1"
                variant="outline"
                onClick={() => onClick("google")}
              >
                <FcGoogle className="text-lg" />
              </Button>
              <Button
                className="flex-1"
                variant="outline"
                onClick={() => onClick("github")}
              >
                <AiFillGithub className="text-lg" />
              </Button>
            </div>
          </div>
          <div className="mt-3 flex-center-center text-center">
            {pathname === "/sign-up" ? (
              <Link href="/sign-in" className="text-brand hover:underline">
                Already have an account? Sign in
              </Link>
            ) : (
              <Link href="/sign-up" className="text-brand hover:underline">
                Don't have an account yet, Sign up
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SocialButtons;
