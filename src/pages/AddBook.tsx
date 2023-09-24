import { useState } from "react";
import Input from "../components/customInput/Input";
import Button from "../components/Button";
import { add_book } from "../slices/bookSlice";
import { useAppDispatch } from "../apps/hooks";
import Booklist from "../components/Booklists";
import BookAdded from "../modals/BookAdded";

const AddBook = () => {
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    const autoClose = () => {
        setShowModal(false);
    }

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    // const [hardCopy, setHardCopy] = useState<boolean>(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTitle("");
        setAuthor("");
        setGenre("");
        setYear("");
        setSummary("");
        const book = {
            id: 3,
            title: title,
            author: author,
            genre: genre,
            yearWritten: year,
            summary: summary
        }
        dispatch(add_book(book));
        setShowModal(true);
    }
    return ( 
        <div className="w-10/12 mx-auto flex flex-col items-center py-8">
            <h2 className="text-white font-lobster font-bold text-2xl mb-8">
                Add a Book
            </h2>
            <form className=" space-y-8 flex flex-col" onSubmit={handleSubmit}>
                <Input type="text" span="Book Title" value={title} setValue={setTitle} id={"1"} required={true}/>
                <Input type="text" span="Book Author" value={author} setValue={setAuthor} id={"2"}/>
                <Input type="text" span="Book Genre" value={genre} setValue={setGenre} id={"3"}/>
                <Input type="text" span="Book Year" value={year} setValue={setYear} id={"4"}/>
                <textarea 
                    rows={3}
                    required
                    placeholder="...book summary"
                    value={summary} 
                    onChange={(e) => setSummary(e.target.value)}
                    className="resize-none outline-none focus:border-[#38bdf8] bg-transparent border-2 border-[#1e293b] p-2 text-white"
                >
                </textarea>
                <div className="flex justify-end w-20 self-end">
                    <Button text={"Add"} icon={false}/>
                </div>
            </form>
            {showModal && <BookAdded modal={showModal} setModal={setShowModal} autoClose={autoClose}/>}
            <Booklist />
        </div>
     );
}
 
export default AddBook;