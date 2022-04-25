import React from "react";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { Product } from "../../types/Entities";
import Image from "next/image";
import { API_ENDPOINTS } from "../../utils/ApiEndpoints";

const fetchData = async () => {
  const res = await fetch(API_ENDPOINTS.FeatureProducts);
  return res.json();
};

const FeatureProducts = () => {
  const { data, status, isLoading } = useQuery<Product[]>(
    ["FeatureProducts"],
    fetchData
  );
  return (
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {data.map((product: Product) => (
            <p key={product.id}>
              {product.id}-{product.name}-{product.price}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<Product[]>(["FeatureProducts"], fetchData);
  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default FeatureProducts;
