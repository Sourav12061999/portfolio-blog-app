import type { NextApiRequest, NextApiResponse } from "next";
import { BlogConnect } from "utils/Connect";
import RouteManager from "Route Manager";
import { cardModel } from "@Schemas";
import { blogModel } from "@Schemas";
import { CardTypeZ } from "@Schemas";

BlogConnect.Connect(); // MongoDB Connection
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const router = new RouteManager(req, res);
  router.get(async (req, res) => {
    try {
      const data = await cardModel.find().lean().exec();
      res.status(200).json({
        data,
        isError: false,
        error: null,
      });
    } catch (error) {
      res.status(404).json({
        isError: true,
        error,
        data: null,
      });
    }
  });
  router.post(async (req, res) => {
    try {
      const BlogData = await blogModel.create({
        htmlContent: `<h1>${req.body.title}</h1>`,
        metaData: [],
      });
      const reqData = {
        title: req.body.title,
        description: req.body.description,
        reviews: 0,
        visits: 0,
        topics: req.body.topics,
      };
      // CardTypeZ.parse(reqData);
      const CardData = await cardModel.create({
        ...reqData,
        blog_id: BlogData._id,
      });
      res.status(200).json({
        isError: false,
        error: null,
        data: CardData,
      });
    } catch (error) {
      res.status(200).json({
        isError: false,
        error,
        data: null,
      });
    }
  });
  router.patch(async (req, res) => {});
  router.delete(async (req, res) => {});
}
