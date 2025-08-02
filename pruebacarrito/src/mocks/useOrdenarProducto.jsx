import { productContext } from "../contexto/productoContexto";
import { useContext } from "react";

export const useOrdenarProducto=(e)=>{
   const { products, setProductosOrdenados } = useContext(productContext);
  let ordenados = [];
  if(e.target.value==="aumentar"){
    ordenados = [...products].sort((a, b) => b.price - a.price);
    setProductosOrdenados()
  }else if(e.target.value==="disminuir"){
    ordenados = [...products].sort((a, b) => a.price - b.price);
  }else{
    ordenados = products
  }
  setProductosOrdenados(ordenados )
}