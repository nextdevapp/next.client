import type { NextApiRequest, NextApiResponse } from "next";
import type { Brand } from "../../types/Entities";
import { BrandData } from "../../types/Data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Brand[]>
) {
  res.status(200).json(BrandData);
}
