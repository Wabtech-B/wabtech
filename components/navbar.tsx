"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Links from "./links";
import MobileMenu from "./mobile-menu";
import ProfileDropdown from "./profile-dropdown";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "fixed w-full top-0 left-0  z-20 bg-background/80 backdrop-blur-sm",
        pathname === "/templates" && "bg-white dark:bg-background/80"
      )}
    >
      <nav className="flex-center-between py-2 max-w-7xl mx-auto px-3 ">
        {/* Logo */}
        <Link href="/" scroll={false}>
          <div className="flex-align-center gap-x-2">
            <Image src="/logo.png" alt="Logo" width={45} height={45} />
            <h1 className="text-xl font-semibold hidden md:block">Wabtech</h1>
          </div>
        </Link>
        {/* Links */}
        <div className="hidden md:block p-2 border border-t-0 rounded-full">
          <Links />
        </div>
        {/* Right Nav */}
        <div className="flex-align-center gap-x-2">
          {session.data?.user ? (
            <ProfileDropdown />
          ) : (
            <>
              <Button asChild variant="link">
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </>
          )}
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
