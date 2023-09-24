import { Link } from "react-router-dom";
import { useAppSelector } from "../apps/hooks";
import Books from "./Book/Book";

const Booklist = () => {
    const books = useAppSelector((state) => state.book.books)
    return ( 
        <div className="w-10/12 mx-auto py-8 space-y-8">
            <h2 className="text-center text-white font-lobster font-bold text-2xl">
                Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-stretch">
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
                        />
                    
                </Link>
            ))}
            </div>
        </div>
     );
}
 
export default Booklist;