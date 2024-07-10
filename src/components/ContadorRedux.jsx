import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { reset, restar, restarEn5, sumar, sumarEn5 } from "../actions/contadorActions"
export const ContadorRedux = () => {
    const state = useSelector(state => state.contador)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Contador con Redux</h1>
            <h2>{state}</h2>
            <nav>
                <button onClick={() => dispatch(sumar())}>Aumentar</button>
                <button onClick={() => dispatch(restar())}>Decrementar</button>
                <button onClick={() => dispatch(sumarEn5())}>Aumentar en 5</button>
                <button onClick={() => dispatch(restarEn5())}>Decrementar en 5</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </nav>
        </div>
    )
}
