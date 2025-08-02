import { MdDelete } from "react-icons/md";
   import { useContext } from "react"
import { productContext } from "../contexto/productoContexto"



export const TarjetaProducto=({id, title, thumbnail,price, cantidad})=>{

    const {carrito, setCarrito} = useContext(productContext);

  const borrarCarrito = () => {
  const productoExistente = carrito.find(producto => producto.id === id);

  if (productoExistente && productoExistente.cantidad > 1) {
    const nuevoCarrito = carrito.map(producto => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    });
    setCarrito(nuevoCarrito);
  } else {
    const nuevoCarrito = carrito.filter(producto => producto.id !== id);
    setCarrito(nuevoCarrito);
  }
};

    
    return(
        <div className="w-[550px] p-6 flex rounded-lg   text-white shadow-lg  rounded-lg gap-6 border-2 border-gray-300" >
            <img className="rounded-xl size-1/3" src={thumbnail} alt={title}/>
            <div className="text-black flex flex-col justify-start size-3/4">
                <strong className="text-lg font-bold">{title}</strong>
                <span>{price}€</span>
                 <span>{cantidad}</span>
            </div>
          <div className=" size-1/4 flex justify-end text-black text-2xl cursor-pointer hover:text-blue-500">
             <MdDelete onClick={borrarCarrito}  />
          </div>
          
        </div>
    )
}