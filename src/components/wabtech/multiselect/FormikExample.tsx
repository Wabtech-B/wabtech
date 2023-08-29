"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "./MultiSelect";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const validationSchema = Yup.object().shape({
  selectedOptions: Yup.array().min(1, "Select at least one option"),
});

const FormikExample = () => {
  const handleSubmit = async (values: { selectedOptions: Option[] }) => {
    toast.success(values.selectedOptions.join(", "));
    console.log("Selected options:", values.selectedOptions);
  };

  const formik = useFormik({
    initialValues: {
      selectedOptions: [] as Option[],
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <MultiSelect
        options={options}
        onSelect={(selectedValues) =>
          formik.setFieldValue("selectedOptions", selectedValues)
        }
      />
      {formik.errors.selectedOptions && formik.touched.selectedOptions && (
        <div className="text-red-500 mt-2">
          {formik.errors.selectedOptions as string}
        </div>
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
