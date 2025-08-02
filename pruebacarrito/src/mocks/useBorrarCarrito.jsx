   import { useContext } from "react"
import { productContext } from "../contexto/productoContexto"
   
export function useBorrarCarrito(){
       const {carrito} = useContext(productContext)
   export const borrarCarrito=()=>{
       carrito.find()

    }
}