import { productContext } from "../contexto/productoContexto";
import { useContext, useState } from "react";
import { Products } from "./products";
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  const { setFilter, products, setProductosOrdenados } = useContext(productContext);
  const [inputCategory, setInputCategory] = useState("");
  const [valor, setValor] = useState(0)


  // Se ejecuta cada vez que se escribe algo
  const renombrarProducto = (e) => {
    const newValue = e.target.value.toLowerCase().trim();
    setInputCategory(newValue);

    // Si se ha borrado todo, resetear filtro
    if (newValue === "") {
      setFilter({
        category: "all",
        price: 0,
      });
    }
  };

  // Se ejecuta solo al presionar Enter (submit del formulario)
  const buscarProducto = (e) => {
    e.preventDefault();
    setFilter({
      category: inputCategory === "" ? "all" : inputCategory,
      price: valor,
    });
  };

  const cambiarValor=(e)=>{
      const newValor = e.target.value;
      setValor(newValor)
  }

const ordenarProducto=(e)=>{
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



  return (
    <header className="w-full py-8 p-12 bg-black/80 text-white flex items-center justify-between">
      <div className="flex gap-6 items-center w-1/3 justify-between">
        <select onChange={ordenarProducto}  className="p-2 w-full rounded-lg border border-gray-300 shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="aumentar">De mayor a mayor</option>
          <option value="disminuir">De menor a mayor</option>
        </select>
        <div className="relative">
        <FaShoppingCart className="text-3xl " />
        <div className="size-6 rounded-full bg-amber-600 flex justify-center items-center text-xs absolute -top-2 -right-3">
          0
        </div>
        </div>
      </div>
      <form className="flex justify-around gap-2"  onSubmit={buscarProducto}>
       <div className="flex justify-center gap-4 text-xl px-10 " >
        <label className="mt-1" htmlFor="price">Precio</label>
         <input className="" onChange={cambiarValor} type="range"   id="price" min={0} max={300}/>
         <span  className="mt-1 ml-4">{valor}</span>
       </div>
      <div  className="flex  gap-4 w-full max-w-xs items-center">
        <label htmlFor="categorias" className="text-lg font-semibold text-white">Categorías</label>
        <select onChange={renombrarProducto} id="categorias" className="p-2 w-full rounded-lg border border-gray-300 shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">Todas</option>
          <option value="clothes">Ropa</option>
          <option value="electronics">Electrónica</option>
          <option value="furniture">Muebles</option>
          <option value="shoes">Zapatos</option>
           <option value="miscellaneous">Varios</option>
       </select>
      </div>
        <input
          onChange={renombrarProducto}
          className="bg-black/20 py-2 px-4 border-1 border-white rounded-lg"
          placeholder="categoria: ropa"
        />
        <input
          className="bg-black/20 py-2 px-4 border-1 border-white w-30 rounded-lg"
          placeholder="precio: 200"
        />
        <button className="bg-amber-600 hover:bg-amber-700 cursor-pointer py-2 px-8 rounded-lg font-bold">
          Buscar
        </button>
      </form>
    </header>
  );
};
