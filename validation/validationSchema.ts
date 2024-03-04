import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required").min(6),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required").min(6),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const changePasswordValidationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const updateProfileValidationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required").min(3),
});

export const contactValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email address must be valid")
    .required("Email Address is required"),
  subject: Yup.string().required("What is the subject?"),
  message: Yup.string().required("Write some message to us"),
});

export const componentValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string(),
});

export const snippetValidationSchema = Yup.object({
  language: Yup.string().required("Language is required"),
  code: Yup.string().required("Code is required"),
});

// Posts---------------------------------------------------------------------------------------------------------------------
export const postValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  slug: Yup.string().required("Slug is required"),
  description: Yup.string().required("Description is required"),
  imageUrl: Yup.string().required("Image is required"),
  content: Yup.string().required("Content is required"),
});

// Post Category---------------------------------------------------------------------------------------------------------------------
export const blogpostCategoryValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string(),
});
