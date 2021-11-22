import React, { useState } from "react";
import AddBook from "./AddBook";
import BookCard from "./BookCard";
import EditBook from "./EditBook";
import Modal from "./Modal";
import {AiOutlinePlus} from 'react-icons/ai'
import { projectFirestore } from "./firebase/config";
import { useAuthContext } from "./hookDrawer/useAuthContext";


export interface Book {
    title: string;
    author: string;
    pages: number | undefined ;
    id : string | undefined;
    status: boolean;
}

interface BookListProps {
    updateLibrary: () => void;
    books: Book[];
}
export const BookList = (props: BookListProps) => {

    const { books, updateLibrary } = props;
    const [bookToEdit, setBookToEdit] = useState<Book | undefined>();
    const [toggleModal,setToggleModal] = useState(false);
    const { user } = useAuthContext();

    const handleEditBook = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement,MouseEvent>)  => {
        const bookID = e.currentTarget.parentElement?.id
        if (!bookID) {
            return;
        }
        setBookToEdit(books.find((x) => x.id === bookID))
       

    }

    const handleBool = () => {
        setToggleModal(!toggleModal);
    }
    

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement,MouseEvent> ) => {
        const bookID = e.currentTarget.parentElement?.id;
        
        if (!bookID) {
            return;
        }
        projectFirestore.collection('books').doc(bookID).delete()
        .then(() => {
            updateLibrary();
        })
    }


return (
    <div className = "content">
        
        {user && (
        <>
        {!!toggleModal && (
            <Modal resetBookToEdit={setBookToEdit} toggleModal = {setToggleModal}>
                <AddBook updateLibrary={updateLibrary} toggleModal={setToggleModal} />
            </Modal>
        )}
        <div className="card-grid">
        <div className = "bookCard editCard" onClick = {handleBool}>
            <div className = "plus-container">
            <AiOutlinePlus className="plus-icon"/>
            </div>
        </div>
        {books.map((book: any) => (
                <BookCard updateLibrary= {updateLibrary} key={book.id} book={book} handleDelete={handleDelete} handleEditBook = {handleEditBook} />
        )
        )}
        </div>
        {!!bookToEdit && (
            <Modal resetBookToEdit={setBookToEdit} toggleModal = {setToggleModal}>
            <EditBook  bookToEdit = {bookToEdit} updateLibrary = {updateLibrary} resetBookToEdit={setBookToEdit}/>
            </Modal>
        )}
        </>
        )}

        {!user && <p>Log in or sign up to start your library!</p>}
        
    </div>
)
}

