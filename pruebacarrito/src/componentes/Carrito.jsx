import { useContext } from "react"
import { productContext } from "../contexto/productoContexto"
import { TarjetaProducto } from "./TarjetaProducto"

export const Carrito = () => {
  const { carrito } = useContext(productContext);




  const renderCarrito = () => {
    return carrito.map(producto => (
      <TarjetaProducto
        key={producto.id}
        id={producto.id}
        title={producto.title}
        thumbnail={producto.image}
        price={producto.price}
        cantidad={producto.cantidad}
      />
    ));
  };

  return (
    <section className="flex flex-col gap-4 p-4">
      {renderCarrito()}
    </section>
  );
};
