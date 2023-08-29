"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Checkbox from "./Checkbox";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

interface FormValues {
  acceptedTerms: boolean;
}

const validationSchema = Yup.object().shape({
  acceptedTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

const FormikExample: React.FC = () => {
  const handleSubmit = async (values: FormValues) => {
    toast.success(values.acceptedTerms ? "Accepted" : "");
    console.log("Form values:", values);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      acceptedTerms: false,
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Checkbox
        label="I accept the terms and conditions"
        value="acceptedTerms"
        id="acceptedTerms"
        onChange={formik.handleChange}
        checked={formik.values.acceptedTerms}
      />
      {formik.errors.acceptedTerms && formik.touched.acceptedTerms && (
        <div className="text-red-500 mt-2">{formik.errors.acceptedTerms}</div>
      )}
      <div className="mt-5">
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default FormikExample;
