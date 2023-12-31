import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;
