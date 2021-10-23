import { useState } from "react";
import BookCard from "./BookCard"

const BookList = ({ books }: { books: any }) => {

    const [bookData, setBookData] = useState(books);

    return (
        <div>
            {bookData.map((book: any) => (
                <BookCard key={book.id} book={book} />
            )
            )}
        </div>
    )
}

export default BookList;