import { ADD_TO_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, CLEAR_CART } from "../types";
export const agregarProducto = (product) => ({ type: ADD_TO_CART, payload: product })
export const removerProducto = (product) => ({ type: REMOVE_ONE_FROM_CART, payload: product })
export const removerProductos = (product) => ({ type: REMOVE_ALL_FROM_CART, payload: product })
export const limpiarCarrito = () => ({ type: CLEAR_CART })
