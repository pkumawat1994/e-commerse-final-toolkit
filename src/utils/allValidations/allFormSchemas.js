import * as Yup from "yup";
import { EmailRegex } from "./AllRegex";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().max(50, "Too Long!").required("Required"),
  email: Yup.string()
    .required("Required")
    .matches(EmailRegex, "invalid Email Please Enter Valid Email"),
  password: Yup.string().required("password is required "),
  cPassword: Yup.string().required("Confirm Password is Required"),
});
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .matches(EmailRegex, "invalid Email Please Enter Valid Email"),

  password: Yup.string().required("password is required "),
});
