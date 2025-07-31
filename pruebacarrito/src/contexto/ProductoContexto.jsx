//import {products as initialProducts} from "../mocks/products.json"
import { useState, createContext } from "react"
import { usePeticionApi } from "../componentes/PeticionApi";

export const productContext = createContext();

export const ProductoContexto= ({children})=>{
    const products = usePeticionApi();
   // const [products] = useState(initialProducts);
    const [filter, setFilter] = useState({
    category: "all",
    price: 0
  })


  console.log(filter)
    return(
        <productContext.Provider value={{products, filter, setFilter}}>
            {children}
        </productContext.Provider>
    )
}