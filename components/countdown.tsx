/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import BgGradient from "./bg-gradient";

const Countdown: React.FC = () => {
  const targetDate = new Date("2024-04-15T23:59:00"); // April 15th, 2024, 11:59 PM

  const [countdown, setCountdown] = useState<number>(0);

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

  useEffect(() => {
    document.querySelector("body")?.classList.add("modal");
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-y-auto hide-scrollbar z-[9999]">
      <div className="relative min-h-screen over flex-center-center text-center overflow-x-hidden bg-gray-950 !text-slate-100">
        <BgGradient />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-3 py-4">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl text-gradient">
              Wabtech
            </h1>
            <blockquote className="max-w-lg pl-4 mx-auto mb-8 text-lg italic text-left border-l-4 border-gray-300">
              We are making some big changes. The components can now be found at{" "}
              <a
                href="https://sleekcomponents.vercel.app"
                target="_blank"
                className="text-brand"
              >
                SleekComponents.
              </a>
              This website is still in development
            </blockquote>
            <h1 className="mt-5 text-3xl">We&apos;re Launching in:</h1>
            <div className="flex-col gap-8 mt-8 text-2xl flex-center-center md:flex-row">
              <div className="p-4 rounded-xl shadow-xl shadow-brand/10 border border-gray-800 text-center bg-gradient-to-tr from-gray-950 to-gray-800 cursor-default hover:border-l-brand hover:border-b-brand hover:scale-105 transition-a w-[200px] h-[200px] shrink-0 flex-center-center">
                <div>
                  <h1 className="text-4xl font-bold md:text-8xl">
                    {addLeadingZero(days)}
                  </h1>
                  <span>Days</span>
                </div>
              </div>
              <div className="p-4 rounded-xl shadow-xl shadow-brand/10 border border-gray-800 text-center bg-gradient-to-tr from-gray-950 to-gray-800 cursor-default hover:border-l-brand hover:border-b-brand hover:scale-105 transition-a w-[200px] h-[200px] shrink-0 flex-center-center">
                <div>
                  <h1 className="text-4xl font-bold md:text-8xl">
                    {addLeadingZero(hours)}
                  </h1>
                  <span>Hours</span>
                </div>
              </div>
              <div className="p-4 rounded-xl shadow-xl shadow-brand/10 border border-gray-800 text-center bg-gradient-to-tr from-gray-950 to-gray-800 cursor-default hover:border-l-brand hover:border-b-brand hover:scale-105 transition-a w-[200px] h-[200px] shrink-0 flex-center-center">
                <div>
                  <h1 className="text-4xl font-bold md:text-8xl">
                    {addLeadingZero(minutes)}
                  </h1>
                  <span>Minutes</span>
                </div>
              </div>
              <div className="p-4 rounded-xl shadow-xl shadow-brand/10 border border-gray-800 text-center bg-gradient-to-tr from-gray-950 to-gray-800 cursor-default hover:border-l-brand hover:border-b-brand hover:scale-105 transition-a w-[200px] h-[200px] shrink-0 flex-center-center">
                <div>
                  <h1 className="text-4xl font-bold md:text-8xl">
                    {addLeadingZero(seconds)}
                  </h1>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
