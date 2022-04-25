import React from "react";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { Brand } from "../../types/Entities";
import { API_ENDPOINTS } from "../../utils/ApiEndpoints";
import { useDispatch } from "react-redux";
import {
  addBrand,
  removeBrand,
} from "../../features/products/ProductFilterSlice";

const fetchData = async () => {
  const res = await fetch(API_ENDPOINTS.Brands);
  return res.json();
};

interface PropTypes {
  Brands: Brand[];
}

const BrandList = ({ Brands }: PropTypes) => {
  const { data, status, isLoading } = useQuery<Brand[]>(["Brands"], fetchData);

  const dispatch = useDispatch();

  const setCategoryToFilter = (e: any) => {
    dispatch(
      e.target.checked
        ? addBrand({
            id: e.target.value,
            name: e.target.name,
          })
        : removeBrand({
            id: e.target.value,
            name: e.target.name,
          })
    );
  };

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p></p>}
      {status === "success" && (
        <div className="px-3">
          <h1 className="text-2xl text-gray-800 mb-3">BRAND</h1>
          <ul>
            {data.map((brand: Brand) => (
              <li key={brand.id}>
                <div className="flex flex-col">
                  <label className="inline-flex items-center  mt-3">
                    <input
                      type="checkbox"
                      value={brand.id}
                      name={brand.name}
                      className="form-checkbox h-5 w-5 text-gray-300 border-gray-300 accent-gray-500"
                      onChange={setCategoryToFilter}
                      checked={
                        Brands.filter((item) => item.id == brand.id).length > 0
                      }
                    />
                    <span className="ml-2 text-gray-500 text-lg font-medium">
                      {" "}
                      {brand.name}
                    </span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BrandList;
