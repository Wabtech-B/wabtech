"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";

const SendEmail = () => {
  const sendEmail = async () => {
    await axios.get("/api/email");
  };
  return (
    <div className="mt-20">
      <Button onClick={sendEmail}>Send Email</Button>
    </div>
  );
};

export default SendEmail;
