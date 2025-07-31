import { useContext } from "react"
import { Product  } from "./product"
import { productContext } from "../contexto/productoContexto"
export const Products = ()=>{

const {products, filter} = useContext(productContext)

  const filtrarProducto = (products)=>{
    return products.filter(product=>{
        return (product.price>= filter.price && (filter.category==="all" || product.category=== filter.category))
    })
  }

  const filtradosProductos = filtrarProducto(products)

    return(
        <main className="flex gap-6 px-24 flex-wrap justify-center">
           {filtradosProductos .map(product=>{
           return(
             <Product key={product.id} title={product.title} thumbnail={product.thumbnail} price={product.price}></Product>
           )
           })}
        </main>
    )
}