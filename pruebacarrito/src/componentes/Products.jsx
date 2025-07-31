import { Product  } from "./product"
import {products as initialProducts} from "../mocks/products.json"
import { useState } from "react"
export const Products = ()=>{

const [products] = useState(initialProducts);
const [filter, setFilter] = useState({
    category: "all",
    price: 50
  })

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
             <Product title={product.title} thumbnail={product.thumbnail} price={product.price}></Product>
           )
           })}
        </main>
    )
}