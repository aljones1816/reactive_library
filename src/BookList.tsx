import React, { Fragment, useEffect, useState } from "react";
import AddBook from "./AddBook";
import BookCard from "./BookCard";
import EditBook from "./EditBook";


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

    const handleEditBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        const bookID = e.currentTarget.parentElement?.id
        if (!bookID) {
            return;
        }
        setBookToEdit(books.find((x) => x.id == Number(bookID)))
       

    }


    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <div>
        <AddBook updateLibrary={updateLibrary} />
        {books.map((book: any) => (
                <BookCard key={book.id} book={book} handleDelete={handleDelete} handleEditBook = {handleEditBook}/>
        )
        )}
        {!!bookToEdit && (
            <EditBook bookToEdit = {bookToEdit} updateLibrary = {updateLibrary} resetBookToEdit={setBookToEdit}/>
        )}
        
    </div>
)
}

