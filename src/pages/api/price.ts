import type { NextApiRequest, NextApiResponse } from "next";
import type {  Price } from "../../types/Entities";
import { PriceData } from "../../types/Data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Price[]>
) {
  res.status(200).json(PriceData);
}
