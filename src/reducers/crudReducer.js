import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types"

export const initialCrudState = {
    products: null
}
export function crudReducer(state = initialCrudState, action) {
    switch (action.type) {
        case READ_ALL_DATA:
            return {
                ...state, products: action.payload.map(data => data)
            }
        case CREATE_DATA:
            return {
                ...state, products: [...state.products, action.payload]
            }
        case DELETE_DATA: {
            let newData = state.products.filter(product => product.id !== action.payload)
            return {
                ...state, products: newData
            }
        }
        case UPDATE_DATA: {
            let newData = state.products.map(producto => producto.id === action.payload.id ? action.payload : producto)
            return {
                ...state, products: newData
            }
        }
        case NO_DATA:
            return initialCrudState
        default:
            return state
    }
}