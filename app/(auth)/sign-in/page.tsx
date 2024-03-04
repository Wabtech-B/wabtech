"use client";

import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginValidationSchema } from "@/validation/validationSchema";
import { useFormik } from "formik";
import { EyeIcon, EyeOff } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { ImSpinner2 } from "react-icons/im";

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const initialValues: User = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: User) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          }
          if (data?.success) {
            resetForm(), setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit: submit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="mt-4">
      <h1 className="text-2xl">Login to continue</h1>
      {(error || urlError) && (
        <div className="my-2">
          <span className="text-red-500">{error || urlError}</span>
        </div>
      )}

      {success && (
        <div className="my-2">
          <span className="text-green-500">{success}</span>
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
          />
          {touched.email && errors.email ? (
            <div className="text-red-600 text-sm">{errors.email}</div>
          ) : null}
        </div>

        {/* Password */}
        <div className="mt-4">
          <div className="relative">
            <div
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              ) : (
                <EyeOff className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              )}
            </div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={values.password}
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.password && errors.password ? (
            <div className="text-red-600 text-sm">{errors.password}</div>
          ) : null}
        </div>

        <div className="flex justify-end mt-2">
          <Link href="/forgot-password" className="text-brand underline">
            Forgot Password?
          </Link>
        </div>

        <div className="mt-5">
          <Button
            type="submit"
            className="w-full rounded-full"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex-center-center gap-x-2">
                <ImSpinner2 className="text-lg animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
