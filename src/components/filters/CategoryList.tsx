import React from "react";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { Category } from "../../types/Entities";
import { API_ENDPOINTS } from "../../utils/ApiEndpoints";
import { useDispatch } from "react-redux";
import {
  addCategory,
  removeCategory,
} from "../../features/products/ProductFilterSlice";

const fetchData = async () => {
  const res = await fetch(API_ENDPOINTS.Categories);
  return res.json();
};

interface PropTypes {
  Categories: Category[];
}

const CategoryList = ({ Categories }: PropTypes) => {
  const { data, status, isLoading } = useQuery<Category[]>(
    ["Categories"],
    fetchData
  );

  const dispatch = useDispatch();

  const setCategoryToFilter = (e: any) => {
    dispatch(
      e.target.checked
        ? addCategory({
            id: e.target.value,
            name: e.target.name,
          })
        : removeCategory({
            id: e.target.value,
            name: e.target.name,
          })
    );
  };

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div className="px-3">
          <h1 className="text-2xl text-gray-800 mb-3">CATEGORY</h1>
          <ul>
            {data.map((category: Category) => (
              <li key={category.id}>
                <div className="flex flex-col">
                  <label className="inline-flex items-center  mt-3">
                  
                    <input
                      type="checkbox"
                      value={category.id}
                      name={category.name}
                      className="form-checkbox h-5 w-5 text-gray-300 border-gray-300 accent-gray-500"
                      onChange={setCategoryToFilter}
                      checked={
                        Categories.filter(
                          (selectedCategory) =>
                            selectedCategory.id == category.id
                        ).length > 0
                      }
                    />
                    <span className="ml-2 text-gray-500 text-lg font-medium">
                      {" "}
                      {category.name}
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

export default CategoryList;
