import { useEffect, useState } from "react";
import BookList from "./BookList";

const Library = () => {

    const [books, setBooks] = useState<any[]>();

    useEffect(() => {
        fetch('http://localhost:8000/books/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBooks(data);
            })
    }, [])

    return (
        <div>
            {!books && (<p>Loading books...</p>)}
            {!!books && <BookList books={books} />}
        </div>
    );
}

export default Library;