import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface HooksBottomLink {
  prevUrl?: string;
  nextUrl?: string;
}

const HooksBottomLinks: React.FC<HooksBottomLink> = ({
  prevUrl = "",
  nextUrl = "",
}) => {
  return (
    <div>
      <div
        className={`flex-align-center flex-col sm:flex-row gap-4 px-4 ${
          nextUrl && prevUrl
            ? "justify-between"
            : prevUrl
            ? "justify-start"
            : "justify-end"
        }`}
      >
        {prevUrl && (
          <Link
            href={prevUrl}
            className="p-3 block w-full sm:w-fit rounded-lg border dark:border-zinc-700 group"
          >
            <div className="flex gap-x-2">
              <div className="group-hover:-translate-x-1 transition-a">
                <FiArrowLeft />
              </div>
              <div>
                <span>Previous</span>
                <p className="capitalize mt-1 text-primary">
                  {prevUrl === "/hooks" ? "Overview" : prevUrl.split("/")[2]}
                </p>
              </div>
            </div>
          </Link>
        )}
        {nextUrl && (
          <Link
            href={nextUrl}
            className="p-3 block w-full sm:w-fit rounded-lg border dark:border-zinc-700 group"
          >
            <div className="flex gap-x-2">
              <div>
                <span>Next</span>
                <p className="mt-1 text-primary">{nextUrl.split("/")[2]}</p>
              </div>
              <div className="group-hover:translate-x-1 transition-a">
                <FiArrowRight />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HooksBottomLinks;
