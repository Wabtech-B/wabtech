import React from "react";
import Footer from "./dashboard/_components/footer";
import Navbar from "./dashboard/_components/navbar";
import Sidebar from "./dashboard/_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="pt-20 grid grid-cols-1 lg:grid-cols-250-auto">
        <div className="w-full">
          <Sidebar />
        </div>
        <div>
          <div className="min-h-[75vh] px-2 md:px-4">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
