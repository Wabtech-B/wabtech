"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { updateProfileValidationSchema } from "@/validation/validationSchema";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";

type User = {
  name: string;
  email: string;
};

const ProfileUpdateForm = () => {
  const { update } = useSession();
  const user = useCurrentUser();
  const initialValues: User = {
    name: user?.name as string,
    email: user?.email as string,
  };

  const handleSubmit = async (values: User) => {
    await update({ name: values.name });
    toast.success("Profile Updated successfully");
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit: submit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: updateProfileValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="p-2 sm:p-4 rounded-lg border border-border">
      <form onSubmit={submit}>
        <div className="flex-align-center flex-col sm:flex-row gap-4">
          {/* Name */}
          <div className="flex-1 w-full sm:w-fit">
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
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="text"
              placeholder="Email"
              value={values.email}
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              disabled
              readOnly
            />
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

export default ProfileUpdateForm;
