"use client";
/* eslint-disable react/no-unescaped-entities */

import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Radio from "./Radio";

interface Gender {
  gender: string;
}

const FormikExample = () => {
  const genderValidationSchema = Yup.object().shape({
    gender: Yup.string().required("Gender is required"),
  });

  const initialValues: Gender = {
    gender: "",
  };

  const handleSubmit = async (values: Gender) => {
    toast.success(values.gender);
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: genderValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* Gender */}
        <div className="mt-6">
          <h1 className="text-xl mb-3">What's your gender</h1>
          <Radio
            label="Male"
            id="male"
            value="male"
            name="gender"
            onChange={formik.handleChange}
            checked={formik.values.gender === "male"}
          />
          <Radio
            label="Female"
            id="female"
            value="female"
            name="gender"
            onChange={formik.handleChange}
            checked={formik.values.gender === "female"}
          />
          {formik.errors.gender && (
            <div className="text-red-500">{formik.errors.gender}</div>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-6"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default FormikExample;
