"use client";
import { useState } from "react";
import { CartItem, Product } from "./types/product";
import { products as prod } from "./products/products";
import Link from "next/link";

export default function ShoppingCartPage() {

  const [products, setProducts] = useState<Product[]>(prod);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: number) => {

    const product = products.find((p) => p.id === productId);

    if (product) {
      const isProductInCart = cartItems.find((prod) => prod.product.id === productId);

      if (isProductInCart) {
        setCartItems(
          cartItems.map((item) => item.product.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ));
      } else {
        setCartItems([...cartItems, { product, quantity: 1 }]);
      }
    }
  };

  const decreaseQuantityCount = (productId: number) => {

    const isProductInCart = cartItems.find((prod) => prod.product.id === productId);

    if (isProductInCart) {
      if (isProductInCart.quantity > 1) {
        setCartItems(cartItems.map((item) => item.product.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ));
      } else {
        setCartItems( cartItems.filter((item) => item.product.id !== productId))}
    }
  };

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

              <button onClick={() => addToCart(product.id)} className="bg-green-700 rounded p-1 hover:text-white cursor-pointer">
                Add to Cart
              </button>

            </div>
          ))}
        </div>

        <div className="bg-white text-black p-1 rounded gap-2 flex flex-col">

          <h2 className="text-center font-bold">Cart Items</h2>
          <div className="flex gap-2 flex-col">

            {cartItems.length === 0 && (
              <p className="text-center font-bold">Your cart is empty! </p>
            )}

            {cartItems.map((cartProducts) => (
              <div className="flex items-center gap-3" key={cartProducts.product.id}>

                <h2 className="flex items-center gap-3">

                  {cartProducts.product.name} -{" "}
                  <span>Price: ${cartProducts.product.price}</span> - {" "}

                  <span className="flex gap-2 items-center font-bold">
                    Quantity:{" "}

                    <button className="bg-green-700 rounded hover:bg-green-500 text-white cursor-pointer w-10" onClick={() => addToCart(cartProducts.product.id)}>
                      +
                    </button>

                    {cartProducts.quantity}

                    <button className="bg-red-700 rounded hover:bg-red-500 cursor-pointer text-white w-10" onClick={() => decreaseQuantityCount(cartProducts.product.id)}>
                      -
                    </button>

                  </span>
                </h2>
              </div>
            ))}

            {cartItems.length > 0 && (
              <h2>
                Total: $
                {cartItems.reduce((acc, cartProducts) => acc + cartProducts.product.price * cartProducts.quantity,0).toFixed(2)}
              </h2>
            )}

          </div>
        </div>
      </div>
      <div className="mt-5">
              <Link href="https://github.com/atanas-zlatev-98/coding-challenges/blob/master/app/(challenges)/shopping-cart/page.tsx" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">GitHub Link</Link>
        </div>
    </div>
  );
}
