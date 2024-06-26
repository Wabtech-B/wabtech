import Countdown from "@/components/countdown";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Countdown /> */}
      <Navbar />
      <main className="min-h-[90vh]">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
