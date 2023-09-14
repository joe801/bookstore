import { useAppSelector } from "../apps/hooks";

const Home = () => {
    const books = useAppSelector((state) => state.book.books)
    return ( 
        <div>
            <h2 className=" text-orange-500">List of Books</h2>
            {books.map((book) => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <h4>{book.author}</h4>
                    <p>{book.genre}</p>
                    <p>{book.summary}</p>
                    <p>{book.yearWritten}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;