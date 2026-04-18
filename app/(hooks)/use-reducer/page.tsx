"use client";

import Link from "next/link";
import { useCart } from "./hook/useCart";
import { products } from "./products/products";

export default function UseReducerPage() {

  const {cart, addItem, removeItem, decreaseQuantity, clearCart, totalPrice, totalProducts} = useCart();

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4 w-screen">
      <h1 className="font-bold text-2xl">Shopping Cart Challenge</h1>

      <div className="flex gap-20">
        <div className="bg-white text-black p-1 rounded gap-2 flex flex-col">

          <h2 className="text-center font-bold">Products</h2>

          {products.map((product) => (
            <div className="flex items-center gap-3" key={product.id}>

              <h2>
                {product.name} - <span>Price: ${product.price}</span>
              </h2>

              <button
                onClick={() => addItem(product)}
                className="bg-green-700 rounded p-1 hover:text-white cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white text-black p-1 rounded gap-2 flex flex-col">
          <h2 className="text-center font-bold">Cart Items</h2>

          <div className="flex gap-2 flex-col">
            {cart.length === 0 && (
              <p className="text-center font-bold">Your cart is empty! </p>
            )}

            {cart.map((cartProducts) => (
              <div className="flex items-center gap-3" key={cartProducts.cartItem.id}>

                <h2 className="flex items-center gap-3">

                  <button
                    className="bg-red-700 rounded hover:bg-red-500 text-white ps-2 pe-2 cursor-pointer"
                    onClick={() => removeItem(cartProducts.cartItem.id)}>
                    X
                  </button>

                  {cartProducts.cartItem.name} - {" "}

                  <span>Price: ${cartProducts.cartItem.price}</span> -{ " "}

                  <span className="flex gap-2 items-center font-bold">
                    Quantity:{" "}

                    <button
                      className="bg-green-700 rounded hover:bg-green-500 text-white cursor-pointer w-10"
                      onClick={() => addItem(cartProducts.cartItem)}>
                      +
                    </button>

                    {cartProducts.quantity}

                    <button
                      className="bg-red-700 rounded hover:bg-red-500 cursor-pointer text-white w-10"
                      onClick={() => decreaseQuantity(cartProducts.cartItem.id)}>
                      -
                    </button>
                  </span>
                </h2>
              </div>
            ))}

            {cart.length > 0 && (
              <>
                <div className="flex gap-3">

                  <h2 className="font-bold">
                    Total: $ {totalPrice().toFixed(2)}
                  </h2>

                  <h3 className="font-bold">
                    Total Products: {totalProducts()}
                  </h3> 

                </div>

                <button
                  className="bg-red-700 rounded hover:bg-red-500 text-white p-2 cursor-pointer"
                    onClick={() => clearCart()}>
                    Clear Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5">
              <Link href="https://github.com/atanas-zlatev-98/coding-challenges/tree/master/app/(hooks)/use-reducer" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">GitHub Link</Link>
        </div>
    </div>
  );
}
