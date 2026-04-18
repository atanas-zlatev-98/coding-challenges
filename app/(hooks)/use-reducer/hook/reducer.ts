import { ActionType, CartStateType } from "../types/types";

export function reducer(state: CartStateType, action: ActionType): CartStateType {

  switch (action.type) {

    case "ADD_PRODUCT": {

      const existingItem = state.cart.find((product) => product.cartItem.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((product) => product.cartItem.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
            )};
      }

      return {
        ...state,
        cart: [...state.cart, { cartItem: action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_PRODUCT": {
      return {
        ...state,
        cart: state.cart.filter((product) => product.cartItem.id !== action.payload),
      };
    }

    case "DECREASE_QUANTITY":{

      const product = state.cart.find((product) => product.cartItem.id === action.payload);

      if (product && product.quantity === 1) {
       return { ...state, cart: state.cart.filter(product => product.cartItem.id !== action.payload) };
      }

      return { ...state, cart: state.cart.map(product => product.cartItem.id === action.payload ? 
        { ...product, quantity: product.quantity - 1 } : product
        )}
    }

    case "CLEAR_CART":{
     return {...state, cart: [] };
    }

    default:
      return state;
  }
}