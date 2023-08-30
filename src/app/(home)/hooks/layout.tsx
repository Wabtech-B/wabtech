import HooksSidebar from "@/components/common/HooksSidebar";
import MobileHooksSidebar from "@/components/common/MobileHooksSidebar";

const Component = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileHooksSidebar />
      <div
        className="bg-image"
        style={{ background: `url('/bg-pattern.png')` }}
      />
      <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-[130px] dark:backdrop-blur-[100px] fixed w-full h-full -z-10" />
      <div className="grid grid-cols-1 lg:grid-cols-250-auto">
        {/* Sidebar */}
        <div>
          <HooksSidebar />
        </div>

        {/* Main Content */}
        <div className="px-2 sm:px-4 pt-24">{children}</div>
      </div>
    </>
  );
};

export default Component;
