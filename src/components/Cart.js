import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart-contaier m-5 p-5">
      <h3 className="text-xl font-bold text-center">Cart</h3>
      {cartItems.length > 0 ? (
        <>
          <button
            className="outline-offset-1 outline-1 outline outline-black bg-black text-white flex m-auto p-2  rounded-md"
            onClick={() => {
              dispatch(emptyCart());
            }}
          >
            Clear cart
          </button>
          <div className="flex flex-col w-6/12 mx-auto my-4 bg-slate-100 shadow-lg p-4 border-solid justify-between">
            {cartItems.map((item) => (
              <div
                className="flex m-auto h-auto justify-between align-bottom"
                key={item.card.info.id}
              >
                <div
                  className="text-left p-2 m-2 border-b-2 border-gray-300"
                  key={item.card.info.id}
                >
                  <div className="text-lg font-semibold">
                    {item.card.info.name}
                  </div>

                  <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-20 bg-white rounded-md h-6 text-gray-700">
                  <span className="minus cursor-pointer border-r-2 border-solid border-gray-300 px-1">
                    -
                  </span>
                  <span className="quantity px-1 ">1</span>
                  <span className="plus cursor-pointer px-1 border-solid border-gray-300 border-l-2">
                    +
                  </span>
                </div>
                <div className="flex justify-center text-center items-center">
                  <div className="w-20 p-2 px-3 m-2">
                    Rs. &nbsp;
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ): <div className="text-center">
      Your cart is empty please add items!!!!
      </div>}
    </div>
  );
};
export default Cart;
