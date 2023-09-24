import { FaTimes } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { useEffect } from "react";
import "./BookAdded.css";

type BookAddedProps = {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    autoClose: () => void;
}

const BookAdded: React.FC<BookAddedProps> = ({modal, setModal, autoClose}) => {
    useEffect(() => {
        if (modal) {
            const timer = setTimeout(() => {
                autoClose();
            }, 3000);

            // Clean up the timer when the component is unmounted or if modal changes
            return () => {
                clearTimeout(timer);
            };
        }
    }, [modal, autoClose]);
    return (
        <>
        { modal &&
        <div className=" fixed h-full w-full inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[999]">
            <div className="bg-[#f3f4f6] flex items-center w-4/5 mx-auto md:mx-0 md:w-[20rem] justify-between py-6 px-2 absolute top-20 md:right-32">
                <div className=" flex items-center gap-2">
                    <h2 className=" font-bebas text-xl">
                        Book Added Successfully
                    </h2>
                    <BsCheckCircleFill className=" text-green-500"/>
                </div>
                <FaTimes className=" text-primary mr-3" onClick={() => setModal(false)}/>
                <div className="absolute h-2 w-11/12 bottom-2 loader self-center"></div>
            </div>
        </div>
        }
        </>
     );
}
 
export default BookAdded;