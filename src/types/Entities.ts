export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Brand = {
  id: number;
  name: string;
};

export type Price = {
  id: number;
  startPrice: number;
  endPrice: number;
};

export type Product = {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  sale_price?: number;
  image: Attachment;
  sku?: string;
  gallery?: Attachment[];
  category: Category;
  tag?: Tag[];
  meta?: any[];
  description?: string;
  variations?: object;
  [key: string]: unknown;
};

export type Tag = {
  id: string | number;
  name: string;
  slug: string;
};

export type ProductDetail = {
  id: string | number;
  name: string;
  slug: string;
  description: string;
  price:number;
  salePrice:number;
};
