import React from "react";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { Product } from "../../types/Entities";
import { API_ENDPOINTS } from "../../utils/ApiEndpoints";
import { ObjectToQueryString } from "../../utils/CommonUtils";
import { RootState, store } from "../../store/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const fetchData = async ({ queryKey }: any) => {
  const [_, filter] = queryKey;

  let baseEndPoint = API_ENDPOINTS.Products;

  if (filter) {
    baseEndPoint = ObjectToQueryString(baseEndPoint, filter);
  }

  const res = await fetch(baseEndPoint);
  return res.json();
};

const ProductList = () => {
  const filter = useSelector((state: RootState) => state?.ProductFilter);
  const { data, status, isLoading } = useQuery<Product[]>(
    ["FeatureProducts", filter],
    fetchData
  );

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p></p>}
      {status === "success" && (
        <div id="main" className="grid grid-cols-3 gap-1 justify-evenly">
          {data.map((product: Product) => (
            <div key={product.id} className="bg-white-700 p-2">
              <Link href={`/products/${product.slug}`}>
                <div className="cursor-pointer">
                  <Image
                    src={product?.image?.thumbnail}
                    width="592"
                    height="592"
                  />
                </div>
              </Link>
              <p>{product.name}</p>
              <p>
                {"$"}
                {product.sale_price}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<Product[]>(["FeatureProducts"], fetchData);
  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default ProductList;
