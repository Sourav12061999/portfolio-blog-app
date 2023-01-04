import { Schema, model, Document, models } from "mongoose";
import { z } from "zod";

export const BlogCardTypeZ = z.object({
  htmlContent: z.string().min(10),
  metaData: z.array(
    z.object({
      name: z.string().min(1).max(20),
      content: z.string().min(10).max(300),
    })
  ),
});

export type BlogCardTypes = z.infer<typeof BlogCardTypeZ>;

export interface BlogCardTypesMongoose extends BlogCardTypes, Document {}

const blogSchema: Schema = new Schema<BlogCardTypesMongoose>({
  htmlContent: { type: String, required: true },
  metaData: [{ type: String, required: true }],
});

export const blogModel =
  models.blogs || model<BlogCardTypesMongoose>("blogs", blogSchema);
