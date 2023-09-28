import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="!bg-cover min-h-screen pt-20 flex-center-center"
      style={{ backgroundImage: "url('hero-bg-pattern.png')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-gradient md:!leading-[90px]">
          Elevate Your Web Experience with Wabtech
        </h1>
        <p className="text-xl md:text-2xl mt-3">
          {" "}
          Empowering your digital presence with top-notch web development,
          reusable React/Next.js components, reusable custom hooks, and
          insightful educative blogs.
        </p>
        <Link
          href="/components"
          className="btn btn-primary block w-max mx-auto mt-5"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
