import Countdown from "@/components/countdown";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const isLaunched = false;
  return (
    <>
      {isLaunched ? (
        <>
          <Navbar />
          <main className="min-h-[90vh]">{children}</main>
          <Footer />
        </>
      ) : (
        <Countdown />
      )}
    </>
  );
};

export default HomeLayout;
