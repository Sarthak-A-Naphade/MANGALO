import React from "react";
import { CDN_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (items) => {
    // dispatch an action
    dispatch(addItems(items));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {(item.card.info.price
                  ? item.card.info.price
                  : item.card.info.defaultPrice) / 100}{" "}
                RS
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className=" relative w-3/12 p-3 my-auto">
            <img
              alt="item"
              src={CDN_IMG_URL + item.card.info.imageId}
              className="w-full rounded-sm"
            />
            <div className="absolute bottom-0 left-1/4">
              <button
                className="font-extrabold  py-1 px-4 mx-auto text-green-600 shadow-lg bg-white rounded-lg m-auto"
                onClick={() => {
                  handleAddItems(item);
                }}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
