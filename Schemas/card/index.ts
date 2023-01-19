import { Schema, model, Document, models } from "mongoose";
import { z } from "zod";
import { BlogTypesMongoose } from "Schemas/blog";

export const CardTypeZ = z.object({
  title: z.string().min(5).max(50),
  description: z.string().min(10).max(200),
  image: z.string(),
  visits: z.number(),
  reviews: z.number(),
});

export type CardTypes = z.infer<typeof CardTypeZ>;

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
