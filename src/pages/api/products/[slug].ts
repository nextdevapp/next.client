import type { NextApiRequest, NextApiResponse } from "next";
import type { ProductDetail } from "../../../types/Entities";
import { ProductDetailData } from "../../../types/Data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDetail | undefined>
) {
  const { slug } = req.query;

  console.log(slug);

  let productdetail = ProductDetailData.find((element) => {
    return element.slug == slug;
  });

  res.status(200).json(productdetail);
}
