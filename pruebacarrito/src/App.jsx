import { useState } from "react"
import { Products } from "./componentes/products"


function App() { 


  return (
    <>
      <h1 className="bg-black text-white font-bold p-12 m-12">Lista de productos</h1>
      <Products>  </Products>
    </>
  )
}

export default App
