/* eslint-disable @next/next/no-img-element */
import GoBack from "@/components/goback";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex-col min-h-screen text-center flex-center-center">
      <img src="/404.png" alt="Not Found" className="w-[400px] -mt-20" />
      <h1 className="text-6xl font-bold opacity-50">Page Not Found</h1>
      <GoBack />
    </div>
  );
};

export default NotFound;
