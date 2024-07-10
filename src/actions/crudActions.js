import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types"
export const agregarProductoCRUD = (res) => ({ type: CREATE_DATA, payload: res })
export const actualizarProductoCRUD = (payload) => ({ type: UPDATE_DATA, payload: payload })
export const eliminarProductoCRUD = (id) => ({ type: DELETE_DATA, payload: id })
export const obtenerProductosCRUD = (res) => ({ type: READ_ALL_DATA, payload: res })
export const noData = () => ({ type: NO_DATA })