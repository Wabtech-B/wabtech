import ComponentSearchDialog from "@/components/common/ComponentSearchDialog";
import ComponentSidebar from "@/components/common/ComponentSidebar";
import MobileComponentSidebar from "@/components/common/MobileComponentSidebar";
import Navbar from "@/components/common/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileComponentSidebar />
      <ComponentSearchDialog />
      <div
        className="bg-image"
        style={{ background: `url('/bg-pattern.png')` }}
      />
      <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-[130px] dark:backdrop-blur-[100px] fixed w-full h-full -z-10" />
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-250-auto">
        {/* Sidebar */}
        <div>
          <ComponentSidebar />
        </div>

        {/* Main Content */}
        <div className="p-4 pt-24">{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
