import z from "zod";

export const envSchema = z.object({
  PORT: z.coerce.number().default(9000),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z
    .string({
      message: "Invalid database URL Or Database URL is not provided",
    })
    .url(),
});

export type EnvSchema = z.infer<typeof envSchema>;
