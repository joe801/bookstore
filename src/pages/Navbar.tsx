import { useState } from "react";
import Button from "../components/Button";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    return (
        <nav className={`${menu ? "bg-[#1e293b] min-h-screen absolute top-0 md:relative w-full" : "bg-[#0b1222] relative"} md:h-20  py-8  md:bg-[#0b1222] z-50`}>
            <div className="flex flex-col md:justify-between md:items-center md:flex-row items-start text-center w-11/12 lg:w-10/12 mx-auto">
                <Link to="/">
                    <h2 className=" font-lobster text-white uppercase font-extrabold text-2xl">
                        J Book
                    </h2>
                </Link>     
                <div className={`${menu? "flex" : "hidden"} md:flex flex-col gap-4 mt-16 md:mt-0 md:flex-row md:items-center self-center md:self-start`}>
                    <Link to="/addBook">
                        <p className="text-white font-lobster font-bold hover:text-textHover duration-300 cursor-pointer">
                            Add Book
                        </p>
                    </Link>
                    
                    <p className="text-white font-lobster font-bold hover:text-textHover duration-300 cursor-pointer">
                        About
                    </p>
                    <Button text={"Sign In"} />
                </div>

                <div onClick={() => toggleMenu()} className="absolute right-4 md:hidden">
                    {menu ? 
                        <AiOutlineClose style={{ color: 'white', fontSize: '1.5rem' }}/>
                        :
                        <FiMenu style={{ color: 'white', fontSize: '1.5rem' }}/>
                    }
                </div>
            </div>
        </nav>
        
     );
}
 
export default Navbar;