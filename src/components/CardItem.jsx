/* eslint-disable react/prop-types */
export const CardItem = ({ data, deleteToCart }) => {
    let { id, name, price, quantity } = data
    return (
        <div style={{ border: "thin solid gray", padding: "1rem" }}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <h5>Cantidad: {quantity}</h5>
            <button onClick={() => deleteToCart(id, "one")}>Eliminar del carrito</button>
            {quantity > 1 && <button onClick={() => deleteToCart(id, "all")}>Eliminar del carro todas las unidades</button>}
        </div>
    )
}