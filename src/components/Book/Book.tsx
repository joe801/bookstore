import { useParams } from "react-router-dom";
import { bookDetails } from "../../types/types";
import "./book.css";

const Book = (props: bookDetails) => {

    return ( 
        <div className="custom-scrollbar border-2 border-[#1e293b] font-mooli text-white p-2 space-y-2 h-80 overflow-y-auto">
            <h3 className=" font-extrabold text-lg">
                {props.title}
            </h3>
            <h4>{props.author}</h4>
            <p>{props.genre}</p>
            <p className=" text-sm">{props.summary}</p>
            <p>{props.yearWritten}</p>
        </div>
     );
}
 
export default Book;