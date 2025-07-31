import { productContext } from "../contexto/productoContexto"
import { useContext, useEffect, useState } from "react"
export const Header = ()=>{

const { setFilter} = useContext(productContext)
const [category, setCategory] = useState("All");
const [inputCategory, setInputCategory] = useState("");

const renombrarProducto = (e) => {
  const newProduct = e.target.value.toLowerCase().trim();
 if(newProduct ==""){
    setFilter({
        category: "all",
        price: 0,
      });
  
 }else{
     setCategory(newProduct);
 }
  setInputCategory(newProduct)
    buscarProducto()
};






const buscarProducto=(e)=>{
    e.preventDefault();
    setFilter({
    category: category === "" ? "all" : category.toLowerCase(),
    price: 0
  })
}




useEffect(()=>{
    if(category==""){
             setFilter({
    category: "all",
    price: 0
  },[category])
    }
})

    return(
        <header className="w-full py-8 p-12 bg-black/80 text-white">
        <form className=" flex justify-end gap-2" onSubmit={buscarProducto}>
              <input onChange={renombrarProducto} className="bg-black/20 py-2 px-4 border-1 border-white  rounded-lg" placeholder="categoria: ropa"/>
               <input className="bg-black/20 py-2 px-4 border-1 border-white  w-30 rounded-lg" placeholder="precio: 200"/>
              <button className="bg-amber-600 hover:bg-amber-700 cursor-pointer py-2 px-8 rounded-lg font-bold">Buscar</button>
            </form>
        </header>
    )
}