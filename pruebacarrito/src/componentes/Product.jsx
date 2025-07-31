import { AddToCartIcon } from "./Icons"

export const Product= ({thumbnail, title, price})=>{
    return(
        <div className="w-[400px] p-6 flex flex-col items-center text-white bg-zinc-950/80 rounded-lg gap-4" >
            <img src={thumbnail} alt={title}/>
            <div className="text-white">
                <strong className="text-xl font-bold">{title}</strong> - <span>{price}</span>
            </div>
            <button><AddToCartIcon  /></button>
        </div>
    )
}