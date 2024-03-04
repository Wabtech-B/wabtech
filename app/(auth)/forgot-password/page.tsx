"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgotPasswordValidationSchema } from "@/validation/validationSchema";
import axios from "axios";
import { useFormik } from "formik";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";

interface User {
  email: string;
}

const ForgotPassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const initialValues: User = {
    email: "",
  };

  const handleSubmit = async (values: User) => {
    try {
      const response = await axios.post("/api/auth/forgot-password", {
        email: values.email,
      });
      setSuccessMessage(response.data);
      setError(null);
    } catch (error: any) {
      setError(error.response.data);
      toast.error(error.response.data);
    }
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
    handleSubmit: submit,
  } = useFormik({
    initialValues,
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-semibold mt-6">Forgot Password?</h1>
      <p className="mt-2 text-lg">
        Enter your registered email address and we shall send you a link to
        reset your password.
      </p>
      {error && (
        <div className="my-2">
          <span className="text-red-500">{error}</span>
        </div>
      )}
      {successMessage && (
        <div className="my-2 p-4 bg-green-500/20 rounded-lg">
          <span className="text-green-500">{successMessage}</span>
        </div>
      )}
      <form onSubmit={submit} className="mt-6">
        {/* Email */}
        <div className="mt-4">
          <Input
            type="text"
            placeholder="Email"
            value={values.email}
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting || successMessage !== null}
            readOnly={isSubmitting || successMessage !== null}
          />
          {touched.email && errors.email ? (
            <div className="text-red-600 text-sm">{errors.email}</div>
          ) : null}
        </div>

        <div className="mt-5">
          <Button
            type="submit"
            className="w-full rounded-full"
            disabled={isSubmitting || successMessage !== null}
          >
            {isSubmitting ? (
              <div className="flex-center-center gap-x-2">
                <ImSpinner2 className="text-lg animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              "Request Reset Link"
            )}
          </Button>
        </div>
      </form>
      <Link
        href="/sign-in"
        className="mt-4 text-brand block flex-center-center gap-x-2"
      >
        <ArrowLeft />
        <span>Go Back</span>
      </Link>
    </div>
  );
};

export default ForgotPassword;
