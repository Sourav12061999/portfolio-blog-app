import { Schema, model, Document, models } from "mongoose";
import { z } from "zod";

export const BlogTypeZ = z.object({
  htmlContent: z.string().min(10),
  metaData: z.array(
    z.object({
      name: z.string().min(1).max(20),
      content: z.string().min(10).max(300),
    })
  ),
});

export type BlogTypes = z.infer<typeof BlogTypeZ>;

export interface BlogTypesMongoose extends BlogTypes, Document {}

const blogSchema: Schema = new Schema<BlogTypesMongoose>({
  htmlContent: { type: String, required: true },
  metaData: [{ type: String, required: true }],
});

export const blogModel =
  models.blogs || model<BlogTypesMongoose>("blogs", blogSchema);
