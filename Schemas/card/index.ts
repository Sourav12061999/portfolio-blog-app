import { Schema, model, Document, models } from "mongoose";
import { z } from "zod";
import { BlogTypesMongoose } from "Schemas/blog";

export const BlogTypeZ = z.object({
  title: z.string().min(5),
  description: z.string().min(10).max(200),
  image: z.string(),
});

export type CardTypes = z.infer<typeof BlogTypeZ>;

export interface CardTypesMongose extends CardTypes, Document {
  blog_id: BlogTypesMongoose["_id"];
}

const cardSchema: Schema = new Schema<CardTypesMongose>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  blog_id: {
    type: Schema.Types.ObjectId,
    ref: "blogs",
    required: true,
  },
});

export const cardModel =
  models.cards || model<CardTypesMongose>("cards", cardSchema);
