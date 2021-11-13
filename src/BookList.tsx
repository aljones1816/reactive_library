import React, { useState } from "react";
import AddBook from "./AddBook";
import BookCard from "./BookCard";
import EditBook from "./EditBook";
import Modal from "./Modal";
import {AiOutlinePlus} from 'react-icons/ai'


export interface Book {
    title: string;
    author: string;
    pages: number;
    id : number;
}

interface BookListProps {
    updateLibrary: (arg: string) => void;
    books: Book[];
}
export const BookList = (props: BookListProps) => {

    const { books, updateLibrary } = props;
    const [bookToEdit, setBookToEdit] = useState<Book | undefined>();
    const [bool,setBool] = useState(false);

    const handleEditBook = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement,MouseEvent>)  => {
        const bookID = e.currentTarget.parentElement?.id
        if (!bookID) {
            return;
        }
        setBookToEdit(books.find((x) => x.id === Number(bookID)))
       

    }

    const handleBool = () => {
        setBool(!bool);
    }
    

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement,MouseEvent> ) => {
        const bookID = e.currentTarget.parentElement?.id;
        const url = 'http://localhost:8000/books/';
        if (!bookID) {
            return;
        }
        fetch(url + bookID, {
            method: 'DELETE'
        }).then(() => {
            updateLibrary(url);
        })
    }


return (
    <div className = "content">
        
        
        {!!bool && (
            <Modal resetBookToEdit={setBookToEdit} setBool = {setBool}>
                <AddBook updateLibrary={updateLibrary} setBool={setBool} />
            </Modal>
        )}
        <div className="card-grid">
        <div className = "bookCard" onClick = {handleBool}>
            <div className = "plus-container">
            <AiOutlinePlus className="plus-icon"/>
            </div>
        </div>
        {books.map((book: any) => (
                <BookCard key={book.id} book={book} handleDelete={handleDelete} handleEditBook = {handleEditBook}/>
        )
        )}
        </div>
        {!!bookToEdit && (
            <Modal resetBookToEdit={setBookToEdit} setBool = {setBool}>
            <EditBook  bookToEdit = {bookToEdit} updateLibrary = {updateLibrary} resetBookToEdit={setBookToEdit}/>
            </Modal>
        )}
        
    </div>
)
}

