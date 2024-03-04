"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerValidationSchema } from "@/validation/validationSchema";
import axios from "axios";
import { useFormik } from "formik";
import { EyeIcon, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";

interface User {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const initialValues: User = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const handleSubmit = async (values: User) => {
    try {
      await axios.post("/api/auth/sign-up", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      setError(null);
      router.push("/sign-in");
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
    validationSchema: registerValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="mt-4">
      <h1 className="text-2xl">Create a free account to get started</h1>
      {error && (
        <div className="my-2">
          <span className="text-red-500">{error}</span>
        </div>
      )}
      <form onSubmit={submit} className="mt-6">
        {/* Name */}
        <div>
          <Input
            placeholder="Username"
            value={values.name}
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? (
            <div className="text-red-600 text-sm">{errors.name}</div>
          ) : null}
        </div>

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

        {/* Password Confirmation */}
        <div className="mt-4">
          <div className="relative">
            <div
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeIcon className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              ) : (
                <EyeOff className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              )}
            </div>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Password Confirmation"
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
              "Sign Up"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
