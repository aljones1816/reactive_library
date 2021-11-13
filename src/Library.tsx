import { useEffect, useState } from "react";
import {BookList} from "./BookList";
import "./styles/library.css"

export const Library = () => {

    const [books, setBooks] = useState<any[]>();
    const updateLibrary = (url: string): void => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBooks(data);
            }
            )

            
    };


    useEffect(() => {
        
        updateLibrary('http://localhost:8000/books/');
        
    }, []);

    return (
        <div>
            {!books && (<p>Loading books...</p>)}
            {!!books && <BookList books={books} updateLibrary = {updateLibrary}/>}
        </div>
    );
}