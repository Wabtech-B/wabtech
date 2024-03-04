import Pill from "@/components/pill";
import React from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Inquiry = () => {
  return (
    <section className="mt-28 pb-16 relative">
      <div className="absolute w-full h-full bg-pattern-bg -z-10 -top-10 opacity-10 dark:opacity-100" />
      <div className="w-[300px] h-[300px] absolute bottom-36 left-1/2 -translate-x-1/2 bg-brand/20 dark:bg-brand/40 rounded-full [filter:blur(150px)]"></div>
      <div className="max-w-7xl mx-auto px-3 relative z-10">
        <div className="text-center">
          <Pill text="Inquiry" />
          <h1
            className="-mt-8 text-3xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Inquiries
          </h1>
          <p className="mt-2" data-aos="fade-up" data-aos-delay="150">
            For any inquiries, please send us a message and we’ll be glad to
            help
          </p>
        </div>

        <div
          className="mt-8 border p-4 rounded-xl bg-background max-w-md mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <form>
            <Input placeholder="Email" />
            <Textarea
              placeholder="What are you inquiring about?"
              className="min-h-[100px] mt-4"
            />
            <Button className="mt-4 w-full">Send</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
