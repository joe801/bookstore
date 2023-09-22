import {FiChevronRight} from "react-icons/fi";

type buttonProp = {
    text: String,
}

const Button = (prop: buttonProp) => {
    return ( 
        <button className="w-full py-1 px-2 bg-textHover rounded-lg flex gap-1 items-center text-center justify-center text-white font-lobster hover:bg-textHover/70 duration-300">
            {prop.text}
            <FiChevronRight className="text-white"/>
        </button>
     );
}
 
export default Button;