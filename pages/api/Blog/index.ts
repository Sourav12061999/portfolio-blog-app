import type { NextApiRequest, NextApiResponse } from "next";
import { BlogConnect } from "utils/Connect";
import RouteManager from "Route Manager";
type Data = {
  name: string;
};

BlogConnect.Connect(); // MongoDB Connection
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
  } catch (error) {}
  res.status(200).json({ name: "John Doe" });
}
