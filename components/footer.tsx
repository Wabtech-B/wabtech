import Image from "next/image";
import Link from "next/link";
import Links from "./links";

const Footer = () => {
  return (
    <footer className="flex-center-center pb-6 mt-14 pt-4 border-t">
      <div>
        <div className="flex-align-center flex-col max-w-7xl mx-auto px-3 gap-4">
          <Link href="/" data-aos="fade-up" data-aos-delay="100">
            <div className="flex-align-center gap-x-2">
              <Image src="/logo.png" alt="Logo" width={45} height={45} />
              <h1 className="text-xl font-semibold">Wabtech</h1>
            </div>
          </Link>
          <div data-aos="fade-up" data-aos-delay="100">
            <Links isFooter className="gap-2 flex-wrap justify-center" />
          </div>
        </div>
        <div className="mt-4 flex-center-center text-center">
          <Link href="/privacy-policy" className="underline text-brand">
            Privacy Policy
          </Link>
        </div>
        <div className="mt-6 text-center">
          <p>Copyright ©{new Date().getFullYear()} Wabtech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
