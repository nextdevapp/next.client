import React from "react";
import { useRouter } from "next/router";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { ProductDetail } from "../../types/Entities";
import Image from "next/image";
import { API_ENDPOINTS } from "../../utils/ApiEndpoints";
import { ObjectToQueryString } from "../../utils/CommonUtils";
import { RootState, store } from "../../store/store";
import { useSelector } from "react-redux";
import Breadcrumb from "./Breadcrumb";
import ProductGallery from "./ProductGallery";

const fetchData = async ({ queryKey }: any | undefined) => {
  const [_, slug] = queryKey;
  if (slug) {
    return fetch(`${API_ENDPOINTS.ProductDetail}/${slug}`).then((res) => {
      const result = res.json();
      return result;
    });
  }

  // if (slug) {
  //   const res = await fetch(`${API_ENDPOINTS.ProductDetail}/${slug}`);
  //   return res.json();
  // } else return undefined;
};

const ProductDetail = () => {
  const {
    query: { slug },
  } = useRouter();

  const { data, status, isLoading } = useQuery<ProductDetail>(
    ["Product", slug],
    fetchData,
  );

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p></p>}
      {status === "success" && (
        <>
          <div>
            <Breadcrumb />
          </div>
          <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
            <div className="col-span-5 grid">
              <ProductGallery />
            </div>
            <div className="col-span-4 pt-8 lg:pt-0">
              <div className="pb-7 mb-7 border-b border-gray-300">
                <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                  {data?.name}
                </h2>
                <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
                  {data?.description}
                </p>
                <div className="flex items-center mt-5">
                  <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
                    <span>$</span>
                    {data.salePrice}
                  </div>

                  <div className="line-through text-gray-400 text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0 ml-4">
                    <span>$</span>
                    {data.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<ProductDetail>(["Product"], fetchData);
  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default ProductDetail;
