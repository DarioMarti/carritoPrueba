import { Products } from "./componentes/products"
import { Header } from "./componentes/Header"
import { ProductoContexto } from "./contexto/productoContexto"

function App() { 


  return (
    <>
    <ProductoContexto>
      <Header/>
      <h1 className="bg-black text-white font-bold p-12 m-12 text-center text-2xl">Lista de productos</h1>
      <Products/>
    </ProductoContexto>
    </>
  )
}

export default App
