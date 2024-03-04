import ProfileDropdown from "@/components/profile-dropdown";
import Image from "next/image";
import Link from "next/link";
import MobileDrawer from "./mobile-drawer";

const Navbar = () => {
  return (
    <>
      <header className="fixed w-full left-0 top-0 py-2 bg-background z-10 border-b border-b-border">
        <nav className="flex-center-between px-2 mt:px-3">
          <Link href="/" scroll={false}>
            <div className="flex-align-center gap-x-2">
              <Image src="/logo2.png" alt="Logo" width={30} height={30} />
              <h1 className="text-xl font-semibold hidden md:block">Wabtech</h1>
            </div>
          </Link>
          <div className="flex-align-center">
            <div className="shrink-0">
              <ProfileDropdown />
            </div>
            <MobileDrawer />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
