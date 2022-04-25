import { Product, Brand, Price, ProductDetail } from "./Entities";

export const ProductData: Product[] = [
  {
    id: 1,
    name: "Nike Sportswear T-Shirt",
    slug: "DN5145-010",
    price: 35,
    quantity: 20,
    sale_price: 26.97,
    image: {
      id: 1,
      thumbnail:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650249252/p1-img-01_zzxekv.webp",
      original:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650249252/p1-img-01_zzxekv.webp",
    },
    sku: "DN5145-010",
    gallery: [
      {
        id: 1,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250162/g1_zyujkc.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250162/g1_zyujkc.webp",
      },
      {
        id: 2,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
      },
    ],
    category: {
      id: 1,
      name: "Nike Sportswear",
    },
    tag: undefined,
    meta: undefined,
    description:
      "The Nike Sportswear T-Shirt is made with mid-weight organic cotton that feels clean and comfortable. A variety of graphics work together to create a fresh look you can pair with your favorite sneakers.",
  },

  {
    id: 2,
    name: "NikeCourt T-Shirt",
    slug: "DD8404-100",
    price: 35,
    quantity: 20,
    sale_price: 27.97,
    image: {
      id: 1,
      thumbnail:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650251654/P2-img1_xx65u8.webp",
      original:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650251654/P2-img1_xx65u8.webp",
    },
    sku: "DN5145-010",
    gallery: [
      {
        id: 1,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650251675/P2-img1_cdtdap.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650251675/P2-img1_cdtdap.webp",
      },
      {
        id: 2,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650251683/P2-img2_au663o.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650251683/P2-img2_au663o.webp",
      },
    ],
    category: {
      id: 1,
      name: "Nike Sportswear",
    },
    tag: undefined,
    meta: undefined,
    description:
      "The NikeCourt T-Shirt elevates a comfortable cotton essential with an oversized NikeCourt logo. The bold, blocky graphic inside of the logo is inspired by the geometric lines of the court.",
  },

  {
    id: 3,
    name: "Jordan New York City",
    slug: "DN5145-010",
    price: 60,
    quantity: 20,
    sale_price: 44.97,
    image: {
      id: 1,
      thumbnail:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650253079/P3-img1_pb2apc.webp",
      original:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650253079/P3-img1_pb2apc.webp",
    },
    sku: "DN5145-010",
    gallery: [
      {
        id: 1,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250162/g1_zyujkc.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250162/g1_zyujkc.webp",
      },
      {
        id: 2,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
      },
    ],
    category: {
      id: 2,
      name: "Nike Sportswear",
    },
    tag: undefined,
    meta: undefined,
    description:
      "The Nike Sportswear T-Shirt is made with mid-weight organic cotton that feels clean and comfortable. A variety of graphics work together to create a fresh look you can pair with your favorite sneakers.",
  },

  {
    id: 4,
    name: "Big Kids' T-Shirt",
    slug: "AR5088-086",
    price: 35,
    quantity: 20,
    sale_price: 26.97,
    image: {
      id: 1,
      thumbnail:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650254724/P4-img1_gnrzfj.webp",
      original:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650254724/P4-img1_gnrzfj.webp",
    },
    sku: "AR5088-086",
    gallery: [
      {
        id: 1,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650254724/p4-g1_i7mguz.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650254724/p4-g1_i7mguz.webp",
      },
      {
        id: 2,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
      },
    ],
    category: {
      id: 3,
      name: "Nike Sportswear",
    },
    tag: undefined,
    meta: undefined,
    description:
      "The Nike Sportswear T-Shirt is made with mid-weight organic cotton that feels clean and comfortable. A variety of graphics work together to create a fresh look you can pair with your favorite sneakers.",
  },
  {
    id: 5,
    name: "Nike Air' T-Shirt",
    slug: "AR5088-086",
    price: 35,
    quantity: 20,
    sale_price: 26.97,
    image: {
      id: 1,
      thumbnail:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650255188/P5-img1_jlq5ld.webp",
      original:
        "https://res.cloudinary.com/dedx6zewi/image/upload/v1650255188/P5-img1_jlq5ld.webp",
    },
    sku: "AR5088-086",
    gallery: [
      {
        id: 1,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650254724/p4-g1_i7mguz.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650254724/p4-g1_i7mguz.webp",
      },
      {
        id: 2,
        thumbnail:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
        original:
          "https://res.cloudinary.com/dedx6zewi/image/upload/v1650250272/g2_pipevw.webp",
      },
    ],
    category: {
      id: 4,
      name: "Nike Sportswear",
    },
    tag: undefined,
    meta: undefined,
    description:
      "The Nike Sportswear T-Shirt is made with mid-weight organic cotton that feels clean and comfortable. A variety of graphics work together to create a fresh look you can pair with your favorite sneakers.",
  },
];

export const BrandData: Brand[] = [
  {
    id: 1,
    name: "NIKE",
  },
  {
    id: 2,
    name: "JORDAN",
  },
  {
    id: 3,
    name: "ADIDAS",
  },
];

export const PriceData: Price[] = [
  {
    id: 1,
    startPrice: 10,
    endPrice: 25,
  },
  {
    id: 2,
    startPrice: 25,
    endPrice: 50,
  },
  {
    id: 3,
    startPrice: 50,
    endPrice: 100,
  },
];

export const ProductDetailData: ProductDetail[] = [
  {
    id: 1,
    name: "Nike Sportswear T-Shirt",
    slug: "DN5145-010",
    description:
      "The Nike Sportswear T-Shirt is made with mid-weight organic cotton that feels clean and comfortable. A variety of graphics work together to create a fresh look you can pair with your favorite sneakers.",
    price: 35,
    salePrice: 26.97,
  },
  {
    id: 2,
    name: "NikeCourt T-Shirt",
    slug: "DD8404-100",
    description:
      "The NikeCourt T-Shirt elevates a comfortable cotton essential with an oversized NikeCourt logo. The bold, blocky graphic inside of the logo is inspired by the geometric lines of the court.",
    price: 35,
    salePrice: 27.97,
  },
  {
    id: 3,
    name: "Jordan New York City",
    slug: "DN5145-010",
    description:
      "The Nike Sportswear T-Shirt is made with mid-weight organic cotton that feels clean and comfortable. A variety of graphics work together to create a fresh look you can pair with your favorite sneakers.",
    price: 60,
    salePrice: 44.97,
  },
];
