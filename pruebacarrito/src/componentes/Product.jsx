import { AddToCartIcon } from "./Icons"
import { productContext } from "../contexto/productoContexto"
import { useContext } from "react"
export const Product= ({thumbnail, title, price, id})=>{

const {carrito, setCarrito} = useContext(productContext)

const agregarCarrito = (e) => {
  e.preventDefault();

  const productoExistente = carrito.find(producto => producto.id === id);

  if (productoExistente) {
    // Ya existe: aumentar cantidad
    const nuevoCarrito = carrito.map(producto =>
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    );
    setCarrito(nuevoCarrito);
  } else {
    // No existe: añadir con cantidad 1
    setCarrito([
      ...carrito,
      {
        id: id,
        title: title,
        price: price,
        image: thumbnail,
        cantidad: 1
      }
    ]);
  }
  console.log(carrito)
};


    return(
        <div className="w-[400px] p-6 flex flex-col items-center text-white bg-zinc-950/80 rounded-lg gap-4" >
            <img src={thumbnail} alt={title}/>
            <div className="text-white">
                <strong className="text-xl font-bold">{title}</strong> - <span>{price}</span>
            </div>
            <button onClick={agregarCarrito} className="cursor-pointer"><AddToCartIcon  /></button>
        </div>
    )
}