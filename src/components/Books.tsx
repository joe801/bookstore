import { useParams } from "react-router-dom";
import { bookDetails } from "../types/types";

const Books = (props: bookDetails) => {

    const {id} = useParams()
    return ( 
        <div>
            <h2>{id}</h2>
            <h3>{props.title}</h3>
            <h4>{props.author}</h4>
            <p>{props.genre}</p>
            <p>{props.summary}</p>
            <p>{props.yearWritten}</p>
        </div>
     );
}
 
export default Books;