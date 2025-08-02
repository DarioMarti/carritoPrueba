import { useContext, useState } from "react"
import { Product  } from "./product"
import { productContext } from "../contexto/productoContexto"


export const Products = ()=>{

const {products, filter, productosOrdenados} = useContext(productContext)


  const filtrarProducto = (products)=>{
    return products.filter(product=>{

        return (product.price>= filter.price && (filter.category==="all" || product.category.name.toLowerCase().includes(filter.category)))
    })
   
  }
/* Busca todas las categorias de los productos
const [cat, setCat] = useState([]);
function buscarCategorias(){
  return(
    products.map(producto=>{
      if(!cat.includes(producto.category.slug)){
        const slugsUnicos = [...new Set(products.map(producto => producto.category.slug))];
        setCat(slugsUnicos);
      }
    })
  )
}buscarCategorias()
console.log(cat)
*/


  const filtradosProductos = filtrarProducto(productosOrdenados)

    return(
        <main className="flex gap-6 px-24 flex-wrap justify-center">
           {filtradosProductos .map(product=>{
           return(
             <Product key={product.id} id={product.id} title={product.title} thumbnail={product.images[0]} price={product.price}></Product>
           )
           })}
        </main>
    )
}