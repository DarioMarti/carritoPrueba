import { Products } from "./componentes/products"
import { Header } from "./componentes/Header"
import { ProductoContexto } from "./contexto/productoContexto"
import { Carrito } from "./componentes/Carrito"

function App() { 


  return (
    <>
    <ProductoContexto>

      <main className="relative">
      <Header/>
      <h1 className="bg-black text-white font-bold p-12 m-12 text-center text-2xl">Lista de productos</h1>
      <Products/>
      <div className="h-screen  bg-white w-[590px] absolute top-0 right-0  ">
      <Carrito></Carrito>
      </div>
      </main>
    </ProductoContexto>
    </>
  )
}

export default App
