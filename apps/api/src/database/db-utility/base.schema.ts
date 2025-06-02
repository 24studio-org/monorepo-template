import { createdAt, primaryId, updatedAt } from "./index";

export const baseSchema = {
  id: primaryId("id"),

  createdAt: createdAt("created_at"),
  updatedAt: updatedAt("updated_at"),
};
