import { FiChevronRight } from "react-icons/fi";

type buttonProp = {
    text: string,
    icon?: boolean,
}

const Button: React.FC<buttonProp> = ({ text, icon }) => {
    console.log('Icon value:', icon);
    return ( 
        <button className="w-full py-1 px-2 bg-textHover rounded-lg flex gap-1 items-center text-center justify-center text-white font-lobster hover:bg-textHover/70 duration-300">
            {text}
            {icon !== false && <FiChevronRight className="text-white"/>}
        </button>
     );
}
 
export default Button;