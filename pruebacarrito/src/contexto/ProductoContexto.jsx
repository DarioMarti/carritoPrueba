//import {products as initialProducts} from "../mocks/products.json"
import { useState, createContext,useEffect } from "react"
import { usePeticionApi } from "../componentes/PeticionApi";

export const productContext = createContext();

export const ProductoContexto= ({children})=>{
    const products = usePeticionApi();
    const [productosOrdenados, setProductosOrdenados] = useState([])
    const [carrito, setCarrito] = useState([])
    useEffect(() => {
    setProductosOrdenados(products);
    }, [products]);
   // const [products] = useState(initialProducts);
    const [filter, setFilter] = useState({
    category: "all",
    price: 0
  })

    return(
        <productContext.Provider value={{products, filter, setFilter, productosOrdenados, setProductosOrdenados, carrito, setCarrito}}>
            {children}
        </productContext.Provider>
    )
}