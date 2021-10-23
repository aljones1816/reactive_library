import { useState } from "react";
import AddBook from "./AddBook";
import BookCard from "./BookCard";


const BookList = ({ books }: { books: any }) => {

    const [bookData, setBookData] = useState(books);

    const handleUpdateList = async () => {
        const response = await fetch('http://localhost:8000/books/');
        const data = await response.json();
        setBookData(data);
    };

    const handleEditBook = (id: any) => {
        
        const newbook = {
            title:"PSYCH!!",
            pages: 37,
            author: "PSYCH!!!",
            status: false,
            id: id
        };
        
        fetch('http://localhost:8000/books/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newbook)
        }).then(() => {handleUpdateList()});

    }

    const handleDelete = (id: any) => {
        fetch('http://localhost:8000/books/' + id, {
            method: 'DELETE'
        }).then(() => {
            handleUpdateList();
        });
    }


    return (
        <div>
            <AddBook handler={handleUpdateList} />
            {bookData.map((book: any) => (
                <div key={book.id}>
                <BookCard  book={book} />
                <button onClick={() => {handleEditBook(book.id)}}>Try me!</button>
                <button onClick = {() => {handleDelete(book.id)}}>delete me!!!</button>
                </div>
            )
            
            )}

        </div>
    )
}

export default BookList;