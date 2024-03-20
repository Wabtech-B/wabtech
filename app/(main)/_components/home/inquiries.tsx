"use client";

import Pill from "@/components/pill";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Inquiry = () => {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const onSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/emails/inquiry", { email, body });
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/templates/inquiries`,
        {
          email,
          subject: "Inquiry",
          inquiry: body,
        }
      );
      toast.success(res.data);
      setEmail("");
      setBody("");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
          <form onSubmit={onSend}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <Textarea
              placeholder="What are you inquiring about?"
              className="min-h-[100px] mt-4"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <Button
              className="mt-4 w-full"
              disabled={loading || !email || !body}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
