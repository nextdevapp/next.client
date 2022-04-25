import React from "react";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { Price } from "../../types/Entities";
import { API_ENDPOINTS } from "../../utils/ApiEndpoints";
import { useDispatch } from "react-redux";
import {
  addPrice,
  removePrice,
} from "../../features/products/ProductFilterSlice";

const fetchData = async () => {
  const res = await fetch(API_ENDPOINTS.Prices);
  return res.json();
};

interface PropTypes {
  Prices: Price[];
}

const PriceList = ({ Prices }: PropTypes) => {
  const { data, status, isLoading } = useQuery<Price[]>(["Prices"], fetchData);

  const dispatch = useDispatch();

  const setCategoryToFilter = (e: any) => {
    dispatch(
      e.target.checked
        ? addPrice({
            id: e.target.value,
            startPrice: 0,
            endPrice: 0,
          })
        : removePrice({
            id: e.target.value,
            startPrice: 0,
            endPrice: 0,
          })
    );
  };

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p></p>}
      {status === "success" && (
        <div className="px-3">
          <h1 className="text-2xl text-gray-800 mb-3">PRICE</h1>
          <ul>
            {data.map((priice: Price) => (
              <li key={priice.id}>
                <div className="flex flex-col">
                  <label className="inline-flex items-center  mt-3">
                    <input
                      type="checkbox"
                      value={priice.id}
                      className="form-checkbox h-5 w-5 text-gray-300 border-gray-300 accent-gray-500"
                      onChange={setCategoryToFilter}
                      checked={
                        Prices.filter((item) => item.id == priice.id).length > 0
                      }
                    />
                    <span className="ml-2 text-gray-500 text-lg font-medium">
                      {"$" + priice.startPrice} To {"$" + priice.endPrice}
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

export default PriceList;
