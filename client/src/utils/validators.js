import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  bio: Yup.string(),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});
