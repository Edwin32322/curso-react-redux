import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeoriaRedux from './components/TeoriaRedux'
import { Provider } from 'react-redux'
import store from './store'
import { ContadorRedux } from './components/ContadorRedux'
import { ShopingCart } from './components/ShopingCart'
import { CrudApi } from './components/CrudApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <h1>React Redux</h1>
        <hr />
        <CrudApi></CrudApi>
        <hr />
        <ShopingCart></ShopingCart>
        <hr />
        <ContadorRedux></ContadorRedux>
        <hr />
        <br /><br /><br /><br /><br />
        <TeoriaRedux></TeoriaRedux>
      </Provider>
    </>
  )
}

export default App
