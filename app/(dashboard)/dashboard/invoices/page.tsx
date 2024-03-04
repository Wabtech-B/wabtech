/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Invoices = () => {
  const invoices = [];
  return (
    <div className="min-h-[75vh] flex-center-center border border-border rounded-lg p-2">
      {invoices.length < 1 && (
        <div>
          <div className="relative w-40 h-40 mx-auto dark:opacity-60">
            <Image
              src="/no-results.png"
              alt="No results"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold opacity-70 text-center">
            No invoices
          </h1>
        </div>
      )}
    </div>
  );
};

export default Invoices;
