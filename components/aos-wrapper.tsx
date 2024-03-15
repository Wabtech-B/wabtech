"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";

const AOSWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div>{children}</div>;
};

export default AOSWrapper;
