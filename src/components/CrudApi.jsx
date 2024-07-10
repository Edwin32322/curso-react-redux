import { useEffect, useState } from "react"
import { helpHttp } from "../helpers/helpHttp"
import { CrudForm } from "./CrudForm"
import { CrudTable } from "./CrudTable"
import { Loader } from "./Loader"
import { Message } from "./Message"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actualizarProductoCRUD, agregarProductoCRUD, eliminarProductoCRUD, noData, obtenerProductosCRUD } from "../actions/crudActions"
export const CrudApi = () => {
    let api = helpHttp()
    let url = "http://localhost:3000/productos"
    const state = useSelector(state => state.crud)
    const dispatch = useDispatch()
    const { products } = state
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [productToEdit, setProductToEdit] = useState(null)
    const createData = (form) => {
        const payload = {
            ...form
        }
        api.post(url, {
            body: payload,
            headers: { "content-type": "application/json" }
        }).then(res => {
            if (!res.error) {
                dispatch(agregarProductoCRUD(res))
            } else {
                setError(res)
            }
        })
    }
    const updateData = (payload) => {
        let endpoint = `${url}/${payload.id}`
        api.put(endpoint, {
            body: payload,
            headers: { "content-type": "application/json" }
        }).then(res => {
            if (!res.err) {
                dispatch(actualizarProductoCRUD(payload))
            } else {
                setError(res)
            }
        })
    }
    const deleteData = (id) => {
        const confirm = window.confirm("¿Desea eliminar el producto?")
        let endpoint = `${url}/${id}`
        if (confirm) {
            api.del(endpoint, {
                "content-type": "application/json"
            }).then(res => {
                if (!res.err) {
                    dispatch(eliminarProductoCRUD(id))
                } else {
                    setError(res)
                }
            })
        } else {
            return
        }
    }
    useEffect(() => {
        setLoading(true)
        //JSON WEB SERVER
        api.get(url).then(res => {
            if (!res.err) {
                dispatch(obtenerProductosCRUD(res))
            } else {
                dispatch(noData())
            }
            setLoading(false)
        }).catch(() => setLoading(false))

    }, [url])
    return (
        <div>
            <h2>Crud API REDUX</h2>
            <CrudForm createData={createData} updateData={updateData} productToEdit={productToEdit} setProductToEdit={setProductToEdit}></CrudForm>
            {products && <CrudTable products={products} setProductToEdit={setProductToEdit} deleteData={deleteData}></CrudTable>}
            {error && <Message msg={`Error: ${error.status}-${error.statusText}`} bgColor={"#dc3545"}></Message>}
            {loading && <Loader></Loader>}
        </div>
    )
}
