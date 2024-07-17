import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearcart, addItem, setCartItems } from "../utils/cartSlice";
import React, { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      dispatch(setCartItems(JSON.parse(savedCartItems)));
    }
  }, [dispatch]);

  const handleClearCart = () => {
    dispatch(clearcart());
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  console.log(cartItems);
  return (
    <div className="text-center p-10">
      <h1 className="text-6xl font-bold mb-8 underline">Cart</h1>
      <div className="w-6/12 m-auto ">
        {cartItems?.length === 0 && (
          <h1 className="text-3xl font-bold mt-20">
            Cart is Empty. Please add some items.
          </h1>
        )}{" "}
        <div className="border border-gray-600 rounded-lg">
          <CategoryItemList itemCards={cartItems} />
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={handleClearCart}
          className="text-white bg-red-600 hover:bg-green-500 p-2 rounded-lg font-semibold text-lg"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
