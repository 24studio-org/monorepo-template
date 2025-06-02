import z from "zod";
import { emailField, passwordField } from "./utils/zod";

export const userSchema = z.object({
  email: emailField(),
  password: passwordField(),
});
