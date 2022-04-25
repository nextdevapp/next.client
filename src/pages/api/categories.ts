import type { NextApiRequest, NextApiResponse } from "next";
import type { Category } from "../../types/Entities";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: "T-SHIRT",
    },
    {
      id: 2,
      name: "HOODIES",
    },
    {
      id: 3,
      name: "SHOES",
    },
    {
      id: 4,
      name: "JACKETS",
    },
    {
      id: 5,
      name: "DRESSES",
    },
  ]);
}
