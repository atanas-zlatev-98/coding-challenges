import { useReducer } from "react";
import { CartStateType, ProductType } from "../types/types";
import { reducer } from "./reducer";

const initialState: CartStateType = {
  cart: [],
};

export function useCart(){

    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = (product: ProductType) => {
        dispatch({ type: "ADD_PRODUCT", payload: product })};

    const removeItem = (id: number) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: id })};

    const decreaseQuantity = (id: number) => {
        dispatch({ type: "DECREASE_QUANTITY", payload: id })};

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })};

    const totalPrice = () =>{
        return state.cart.reduce((total, cartItem) => total + cartItem.cartItem.price * cartItem.quantity, 0);
    };

    const totalProducts = () =>{
        return state.cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    };


    return {cart:state.cart, totalPrice, totalProducts, addItem, removeItem, decreaseQuantity, clearCart};

}

