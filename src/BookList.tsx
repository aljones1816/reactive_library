import React, { useEffect, useState } from "react";
import AddBook from "./AddBook";
import BookCard from "./BookCard";


const BookList = ({ books }: { books: any }) => {
    const [bookData, setBookData] = useState(books);


    const handleUpdateList = async () => {
        const response = await fetch('http://localhost:8000/books/');
        const data = await response.json();
        setBookData(data);
    };

    const handleEditBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        const bookID = e.currentTarget.parentElement?.id
        if (!bookID) {
            return
        }
        //TODO: Render Edit book component
        // use a chakra modal and will set boolean to true to render
        // will need to pass to the modal (import modal, modal overlay, content)
        // pass in book object with modal content

    }

    const handleDelete = (id: any) => {
        fetch('http://localhost:8000/books/' + id, {
            method: 'DELETE'
        }).then(() => {
            handleUpdateList();
        });
    }

    useEffect(() => {
        //TODO: make API call
        //TODO Updatebooks
    }, [])



    return (

        bookData.map((book: any) => (
            <BookCard key={book.id} book={book} />
        )
        )
    )
}

export default BookList;