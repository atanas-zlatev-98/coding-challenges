export type ProductType = {
    id: number;
    name: string;
    price: number;
}

export type CartItemType = {
    cartItem: ProductType;
    quantity: number;
}

export type CartStateType = {
    cart: CartItemType[];
}

export type ActionType =
  | { type: "ADD_PRODUCT"; payload: ProductType }
  | { type: "REMOVE_PRODUCT"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number }
  | { type: "CLEAR_CART" };