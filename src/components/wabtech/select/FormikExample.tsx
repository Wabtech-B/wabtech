"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Select from "./Select";
import { FiBriefcase } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

interface Role {
  role: string;
}

const FormikExample = () => {
  const options = [
    {
      value: "Super Admin",
      label: "Super Admin",
    },
    {
      value: "CEO",
      label: "CEO",
    },
    {
      value: "CTO",
      label: "CTO",
    },
    {
      value: "Customer Maintenance",
      label: "Customer Maintenance",
    },
  ];

  const roleValidationSchema = Yup.object().shape({
    role: Yup.string().required(),
  });

  const initialValues: Role = {
    role: "",
  };

  const handleSubmit = async (values: Role) => {
    toast.success(values.role);
    console.log(values);
  };

  const {
    values,
    touched,
    isSubmitting,
    handleSubmit: submit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: roleValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleSelect = (value: string) => {
    setFieldValue("role", value);
  };

  return (
    <div>
      <form onSubmit={submit}>
        {/* Role */}
        <div className="mt-6">
          <Select
            options={options}
            onSelect={handleSelect}
            icon={<FiBriefcase />}
            text="Select a role*"
            invalid={!values.role && touched.role}
          />
          {!values.role && touched.role && (
            <div className="text-red-600 text-sm mt-2">Role is requied</div>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormikExample;
