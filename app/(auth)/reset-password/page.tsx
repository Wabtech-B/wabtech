"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPasswordValidationSchema } from "@/validation/validationSchema";
import axios from "axios";
import { useFormik } from "formik";
import { EyeIcon, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";

interface User {
  newPassword: string;
  password_confirmation: string;
}

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") as string;
  const token = searchParams.get("token");

  useEffect(() => {
    if (!email || !token) {
      router.push("/sign-in");
    }
  }, [email, router, token]);

  const initialValues: User = {
    newPassword: "",
    password_confirmation: "",
  };

  const handleSubmit = async (values: User) => {
    try {
      await axios.put("/api/auth/reset-password", {
        newPassword: values.newPassword,
        email,
        token,
      });
      router.push(
        "/sign-in?message=Your password has been reset successfully, Login"
      );
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
    validationSchema: resetPasswordValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-semibold mt-6">Reset Password</h1>
      {error && (
        <div className="my-2">
          <span className="text-red-500">{error}</span>
        </div>
      )}
      <p className="mt-2 text-lg">Enter your new password</p>
      <form onSubmit={submit} className="mt-6">
        <Input type="email" value={email} disabled readOnly />

        {/* New Password */}
        <div className="mt-4">
          <div className="relative">
            <div
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              ) : (
                <EyeIcon className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              )}
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="New Password Confirmation"
              value={values.newPassword}
              id="newPassword"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.newPassword && errors.newPassword ? (
            <div className="text-red-600 text-sm">{errors.newPassword}</div>
          ) : null}
        </div>

        {/* Password Confirmation */}
        <div className="mt-4">
          <div className="relative">
            <div
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              ) : (
                <EyeIcon className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              )}
            </div>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="New Password Confirmation"
              value={values.password_confirmation}
              id="password_confirmation"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.password_confirmation && errors.password_confirmation ? (
            <div className="text-red-600 text-sm">
              {errors.password_confirmation}
            </div>
          ) : null}
        </div>

        <div className="mt-5">
          <Button
            type="submit"
            className="w-full rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex-center-center gap-x-2">
                <ImSpinner2 className="text-lg animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              "Reset Password"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
