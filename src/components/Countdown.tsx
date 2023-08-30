/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import useDarkMode from "@/components/wabtech/hooks/useDarkMode/useDarkMode";

const Countdown: React.FC = () => {
  const targetDate = new Date("2023-09-30T23:59:00"); // September 30th, 2023, 11:59 PM

  const [countdown, setCountdown] = useState<number>(0);
  const { mode, handleModeChange } = useDarkMode("darkModePreference");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetDate.getTime() - currentTime;
      if (timeDifference > 0) {
        setCountdown(Math.floor(timeDifference / 1000));
      } else {
        clearInterval(interval);
        setCountdown(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdown / (24 * 60 * 60));
  const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  const addLeadingZero = (number: number): string =>
    number < 10 ? `0${number}` : `${number}`;

  return (
    <div>
      <div className="bg-image" style={{ background: `url('/bg.png')` }} />
      <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-[20px] fixed w-full h-full -z-10" />
      <div className="container min-h-screen px-3 py-8 mx-auto text-center flex-center-center">
        {/* <div className="gradient-bg" /> */}
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl text-gradient">
            Wabtech
          </h1>
          <blockquote className="max-w-lg pl-4 mx-auto mb-8 text-lg italic text-left border-l-4 border-gray-300">
            Empowering your digital presence with top-notch web development,
            reusable React components, stylish templates, and insightful
            educative blogs.
          </blockquote>
          <h1 className="mt-5 text-3xl">We're Launching in:</h1>
          <div className="flex-col gap-8 mt-8 text-2xl flex-center-center sm:flex-row">
            <div className="flex-col gap-2 py-4 w-[200px] border rounded-lg shadow-lg flex-center-center bg-white dark:bg-zinc-800/40 backdrop-blur-lg border-zinc-600 shadow-primary/40">
              <h1 className="text-4xl font-bold md:text-8xl">
                {addLeadingZero(days)}
              </h1>
              <span>Days</span>
            </div>
            <div className="flex-col gap-2 py-4 w-[200px] border rounded-lg shadow-lg flex-center-center bg-white dark:bg-zinc-800/40 backdrop-blur-lg border-zinc-600 shadow-primary/40">
              <h1 className="text-4xl font-bold md:text-8xl">
                {addLeadingZero(hours)}
              </h1>
              <span>Hours</span>
            </div>
            <div className="flex-col gap-2 py-4 w-[200px] border rounded-lg shadow-lg flex-center-center bg-white dark:bg-zinc-800/40 backdrop-blur-lg border-zinc-600 shadow-primary/40">
              <h1 className="text-4xl font-bold md:text-8xl">
                {addLeadingZero(minutes)}
              </h1>
              <span>Minutes</span>
            </div>
            <div className="flex-col gap-2 py-4 w-[200px] border rounded-lg shadow-lg flex-center-center bg-white dark:bg-zinc-800/40 backdrop-blur-lg border-zinc-600 shadow-primary/40">
              <h1 className="text-4xl font-bold md:text-8xl">
                {addLeadingZero(seconds)}
              </h1>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
