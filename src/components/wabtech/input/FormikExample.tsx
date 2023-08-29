"use client";

import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import Input from "./Input";

interface User {
  username: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

const FormikExample = () => {
  const initialValues: User = {
    username: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  };

  // Validation
  const userValidationSchema = Yup.object().shape({
    username: Yup.string().required().min(3),
    email: Yup.string().email().required(),
    password: Yup.string()
      .required()
      .min(6, "Password must be at least 6 characters"),
    password_confirmation: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (values: User) => {
    toast.success("User added successfully");
    console.log(values);
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
    validationSchema: userValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={submit}>
        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Username */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              label="Username*"
              value={values.username}
              id="username"
              icon={<FiUser />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.username && (errors.username as unknown as boolean)
              }
            />
            {touched.username && errors.username ? (
              <div className="text-red-600 text-sm">{errors.username}</div>
            ) : null}
          </div>

          {/* Email */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="text"
              label="Email*"
              value={values.email}
              id="email"
              icon={<FiMail />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={touched.email && (errors.email as unknown as boolean)}
            />
            {touched.email && errors.email ? (
              <div className="text-red-600 text-sm">{errors.email}</div>
            ) : null}
          </div>
        </div>

        {/* Phone */}
        <div className="mt-6">
          <Input
            label="Phone"
            value={values.phone}
            id="phone"
            icon={<FiPhone />}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={touched.phone && (errors.phone as unknown as boolean)}
          />
          {touched.phone && errors.phone ? (
            <div className="text-red-600 text-sm">{errors.phone}</div>
          ) : null}
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-4 mt-6">
          {/* Password */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Password*"
              value={values.password}
              id="password"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.password && (errors.password as unknown as boolean)
              }
            />
            {touched.password && errors.password ? (
              <div className="text-red-600 text-sm">{errors.password}</div>
            ) : null}
          </div>

          {/* Password Confirmation */}
          <div className="flex-1 w-full sm:w-fit">
            <Input
              type="password"
              label="Password Confirmation*"
              value={values.password_confirmation}
              id="password_confirmation"
              icon={<FiLock />}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={
                touched.password_confirmation &&
                (errors.password_confirmation as unknown as boolean)
              }
            />
            {touched.password_confirmation && errors.password_confirmation ? (
              <div className="text-red-600 text-sm">
                {errors.password_confirmation}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormikExample;
