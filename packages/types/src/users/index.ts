import z from "zod";
import { emailField, passwordField } from "../zod-utility";

export const userSchema = z.object({
  email: emailField(),
  password: passwordField(),
});
