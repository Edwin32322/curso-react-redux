import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";

const shopingInitialState = {
    products: [
        { id: 1, name: "Producto 1", price: 1000 },
        { id: 2, name: "Producto 2", price: 2000 },
        { id: 3, name: "Producto 3", price: 3000 },
        { id: 4, name: "Producto 4", price: 4000 },
        { id: 5, name: "Producto 5", price: 5000 },
    ],
    cart: []
};

export default function shopingReducer(state = shopingInitialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            let newItem = state.products.find((product) => product.id === action.payload.id);
            let itemInCart = state.cart.find(item => item.id === newItem.id);
            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item => item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item)
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                };
        }
        case REMOVE_ONE_FROM_CART: {
            console.log(action.payload)
            let itemInCart = state.cart.find(item => item.id === action.payload.id);
            if (itemInCart.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload.id)
                };
            }
            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item)
                }
                : state;
        }
        case REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        case CLEAR_CART:
            return {
                ...state,
                cart: shopingInitialState.cart
            };
        default:
            return state;
    }
}
