import { useState } from "react";
import CartWidget from "./cartWidget";
const Navbar = () =>{
    const [showCategories,setShowCategories] = useState(false)
    return (
        <nav className="bg-rose-300 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="mr-20">
                <img src="" alt="" />
            </div>
            <div className="pr-6">
                MERAKI
            </div>
            <div className="flex items-center justify-center flex-grow">
                <img src="" alt="" />   
            <form className="bg-white p-2 h-[20%] w-full rounded-lg">
                    <input type="text" />
                </form>
            </div>
            <div className="ml-20 flex items-center justify-end">
                <ul className="flex space-x-4 justify-end">
                    <li>
                         <button className="text-rose-950" href="" onClick={()=> setShowCategories(!showCategories)}>Categorias</button>
                         {showCategories &&(
                            <ul className="absolute bg-rose-100  w-[5%] rounded-lg">
                            <li>
                                Productos A
                            </li>
                            <li>
                                Productos B
                            </li>
                            <li>
                               Productos C
                            </li>
                         </ul>)}
                    </li>
                    <li>
                    <button className="text-rose-950">Productos</button>
                    </li>
                    <li>
                    <button className="text-rose-950">Contacto</button>
                    </li>
                    <li>
                    <CartWidget/>
                    </li>
                    
                </ul>
            </div>
        </div>
        </nav>
    )
}
export default Navbar;