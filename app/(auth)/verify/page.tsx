"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { Spinner } from "@/components/spinner";

const Verify = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const email = searchParams.get("email") as string;

  useEffect(() => {
    if (!email) {
      router.push("/sign-up");
    }
  }, [email, router]);

  const handleVerify = useCallback(async () => {
    try {
      setLoading(true);
      await axios.put("/api/auth/verify", {
        email,
      });
      setSuccessMessage(
        `Email ${email} has been successfully verified, you can continue`
      );
    } catch (error: any) {
      toast.error(error.response.data);
      setError(
        "Something went wrong, please try again! Maybe the email address is wrong?"
      );
    } finally {
      setLoading(false);
    }
  }, [email]);

  useEffect(() => {
    handleVerify();
  }, [handleVerify]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex-center-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex-center-center">
      {successMessage && (
        <div className="max-w-xs w-full bg-brand/20  text-center flex-center-center p-4 border rounded-xl border-brand">
          <div>
            <p className="text-lg text-brand">{successMessage}</p>
            <Button className="mt-4 w-max mx-auto" asChild>
              <Link href="/dashboard">Continue</Link>
            </Button>
          </div>
        </div>
      )}
      {error && (
        <div className="max-w-xs w-full bg-red-500/20  text-center flex-center-center p-4 border rounded-xl border-red-500">
          <div>
            <p className="text-lg text-red-500">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verify;
