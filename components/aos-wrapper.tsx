"use client";

import { useEffect, ReactNode, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div>{children}</div>;
};

export default AOSWrapper;
