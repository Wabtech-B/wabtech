"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { changePasswordValidationSchema } from "@/validation/validationSchema";
import axios from "axios";
import { useFormik } from "formik";
import { EyeIcon, EyeOff } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";

type Password = {
  currentPassword: string;
  newPassword: string;
  password_confirmation: string;
};

const PasswordChangeForm = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues: Password = {
    currentPassword: "",
    newPassword: "",
    password_confirmation: "",
  };

  const handleSubmit = async (values: Password) => {
    try {
      const response = await axios.put("/api/auth/change-password", {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
      toast.success(response.data);
      setError(null);
      resetForm();
      await signOut();
    } catch (error: any) {
      setError(error.response.data);
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
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: changePasswordValidationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="mt-8 p-2 sm:p-4 rounded-lg border border-border">
      {error && (
        <div className="my-2">
          <span className="text-red-500">{error}</span>
        </div>
      )}
      <form onSubmit={submit} className="mt-3">
        {/* Current Password */}
        <div className="mt-4">
          <div className="relative">
            <div
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? (
                <EyeIcon className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              ) : (
                <EyeOff className="w-5 h-5 text-slate-600 dark:text-slate-200" />
              )}
            </div>
            <Input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Current Password"
              value={values.currentPassword}
              id="currentPassword"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.currentPassword && errors.currentPassword ? (
            <div className="text-red-600 text-sm">{errors.currentPassword}</div>
          ) : null}
        </div>

        <div className="mt-4 flex-align-center flex-col sm:flex-row gap-4">
          {/* New Password */}
          <div className="flex-1 w-full sm:w-fit">
            <div className="relative">
              <div
                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeIcon className="w-5 h-5 text-slate-600 dark:text-slate-200" />
                ) : (
                  <EyeOff className="w-5 h-5 text-slate-600 dark:text-slate-200" />
                )}
              </div>
              <Input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
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

          {/* Confirm Password */}
          <div className="flex-1 w-full sm:w-fit">
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
        </div>

        <div className="flex justify-end mt-4">
          <Button type="submit" variant="secondary" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex-center-center gap-x-2">
                <ImSpinner2 className="text-lg animate-spin" />
                <span>Updating...</span>
              </div>
            ) : (
              "Update"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PasswordChangeForm;
