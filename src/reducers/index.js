import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import shopingReducer from "./shoppingCartReducer";
import { crudReducer } from "./crudReducer";
const reducer = combineReducers({
    contador: contadorReducer,
    carrito: shopingReducer,
    crud: crudReducer
})
export default reducer
