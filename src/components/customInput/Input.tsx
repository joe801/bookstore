import { useRef } from "react";
import { inputProp } from "../../types/types";
import "./input.css";

const Input = (props: inputProp) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSpanClick = () => {
        inputRef.current?.focus();
    };

    return ( 
        <div className=" relative my-2">
            <input  
                ref={inputRef}
                required={false}
                className={`${props.value.trim() ? 'not-empty' : ''} border-2 border-[#1e293b] 
                bg-transparent focus:border-[#38bdf8] outline-none text-white p-2 font-semibold 
                font-mooli tracking-wide w-full`}
                type={props.type}
                value={props.value} 
                onChange={e => props.setValue(e.target.value)}
            />
            <span 
                onClick={handleSpanClick}
                className="absolute left-2 top-2 text-[#8391a6] bg-primary"
            >
                {props.span}
            </span>
        </div>
    );
}
 
export default Input;