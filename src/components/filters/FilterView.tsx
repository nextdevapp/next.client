import React from "react";
import { RootState, store } from "../../store/store";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import {
  removeCategory,
  removeBrand,
  removePrice,
} from "../../features/products/ProductFilterSlice";
import type { Category } from "../../types/Entities";

const FilterView = () => {
  const categories = useSelector(
    (state: RootState) => state.ProductFilter.categories
  );

  const brands = useSelector((state: RootState) => state.ProductFilter.brand);

  const prices = useSelector((state: RootState) => state.ProductFilter.price);

  const dispatch = useDispatch();

  const removeItemFromFilter = (item: any) => {
    
    if (item.category) {
      dispatch(
        removeCategory({
          id: item.category.id,
          name: item.name,
        })
      );
    }
    if (item.brand) {
      dispatch(
        removeBrand({
          id: item.brand.id,
          name: item.name,
        })
      );
    }
    if (item.price) {
      dispatch(
        removePrice({
          id: item.price.id,
          startPrice: item.startPrice,
          endPrice: item.endPrice,
        })
      );
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-gray-300 mb-3">FILTERS</h1>
      <div id="main" className="grid grid-cols-3 gap-1 justify-evenly">
        {categories.map((category) => (
          <span
            key={category.id}
            className=" inline-block px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
          >
            {category.name}
            <button className="bg-transparent hover focus:outline-none">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                className="w-3 ml-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                onClick={() => removeItemFromFilter({ category })}
              >
                <path
                  id={category.id.toString()}
                  onClick={() => removeItemFromFilter({ category })}
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
          </span>
        ))}
        {brands.map((brand) => (
          <span
            key={brand.id}
            className=" inline-block px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
          >
            {brand.name}
            <button className="bg-transparent hover focus:outline-none">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                className="w-3 ml-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                onClick={() => removeItemFromFilter({ brand })}
              >
                <path
                  id={brand.id.toString()}
                  onClick={() => removeItemFromFilter({ brand })}
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
          </span>
        ))}

        {prices.map((price) => (
          <span
            key={price.id}
            className=" inline-block px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
          >
            {"$" + price.startPrice} To {"$" + price.endPrice}
            <button
              className="bg-transparent hover focus:outline-none"
              id={price.id.toString()}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                className="w-3 ml-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                id={price.id.toString()}
                onClick={() => removeItemFromFilter({ price })}
              >
                <path
                  id={price.id.toString()}
                  onClick={() => removeItemFromFilter({ price })}
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterView;
