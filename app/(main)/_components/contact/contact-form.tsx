"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const onSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/emails/contact", {
        email,
        subject,
        body,
      });
      toast.success(res.data);
      setEmail("");
      setSubject("");
      setBody("");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSend}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <Input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="mt-4"
        required
      />
      <Textarea
        placeholder="Message"
        className="min-h-[100px] mt-4"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        className="mt-4 w-full"
        disabled={loading || !email || !subject || !body}
      >
        {loading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
