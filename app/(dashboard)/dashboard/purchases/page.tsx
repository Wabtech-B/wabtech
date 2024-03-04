/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Purchases = () => {
  const purchases = [];
  return (
    <div className="min-h-[75vh] flex-center-center border border-border rounded-lg p-2">
      {purchases.length < 1 && (
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
            You haven't made any purchases
          </h1>
          <Button
            asChild
            className="mx-auto w-max block mt-4 flex-center-center"
          >
            <Link href="/templates">Start Purchasing</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Purchases;
