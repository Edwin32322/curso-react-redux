import { ProductItem } from "../components/ProductItem"
import { CardItem } from "../components/CardItem"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { agregarProducto, limpiarCarrito, removerProducto, removerProductos } from "../actions/shoppingActions"

export const ShopingCart = () => {
    const state = useSelector(state => state.carrito)
    const dispatch = useDispatch()
    const { products, cart } = state
    const addToCart = (id) => {
        const productToCart = products.find(product => product.id === id)
        dispatch(agregarProducto(productToCart))
    }
    const deleteToCart = (id, option) => {
        const indexOneProduct = products.find(product => product.id === id)
        if (option === "one") {
            dispatch(removerProducto(indexOneProduct))
        }
        if (option === "all") {
            dispatch(removerProductos(indexOneProduct))
        }
    }
    const clearToCart = () => {
        dispatch(limpiarCarrito())
    }
    return (
        <div>
            <h2>Carrito de Compras con REDUX</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map(producto => <ProductItem key={producto.id} data={producto} addToCart={addToCart}></ProductItem>)}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={clearToCart}>Limpiar Carrito</button>
                {cart.length > 0 && cart.map((item, index) => <CardItem key={index} data={item} deleteToCart={deleteToCart} ></CardItem>)}
            </article>
        </div>
    )
}
