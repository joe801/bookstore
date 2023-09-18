import { Link } from "react-router-dom";
import { useAppSelector } from "../apps/hooks";
import Books from "./Books";

const Booklist = () => {
    const books = useAppSelector((state) => state.book.books)
    return ( 
        <div>
            <h2 className=" text-orange-500">List of Books</h2>
            {books.map((book) => (
                <Link to={`/${book.id}`}>
                    <Books 
                        title={book.title} 
                        key={book.id} 
                        author={book.author} 
                        genre={book.genre} 
                        id={book.id} 
                        yearWritten={book.yearWritten} 
                        summary={book.summary}
                        hardCopy={book.hardCopy}
                    />
                </Link>
            ))}
        </div>
     );
}
 
export default Booklist;