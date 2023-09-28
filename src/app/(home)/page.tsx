import Ad from "@/components/home/Ad";
import Banner from "@/components/home/Banner";
import Components from "@/components/home/Components";
import Hooks from "@/components/home/Hooks";
import Services from "@/components/home/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* <div className="gradient-bg -z-10" /> */}
      <div className="bg-image" style={{ background: `url('/bg.png')` }} />
      <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-[20px] fixed w-full h-full -z-10" />
      <Banner />
      <Services />
      <Components />
      <Hooks />
      <Ad />
    </div>
  );
};

export default Home;
