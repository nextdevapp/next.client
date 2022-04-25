// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "../../types/Entities";
import { ProductData } from "../../types/Data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  let products = ProductData;
  const { categories } = req.query;

  if (categories) {
    products = products.filter((product) => {
     return categories.includes(product.category.id.toString());
    });
  }
  res.status(200).json(products);
}
