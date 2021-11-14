import { useEffect, useState } from "react";
import {BookList} from "./BookList";
import NavBar from "./NavBar";
import "./styles/library.css"

export const Library = () => {
    const [url, setUrl] = useState('http://localhost:8000/books/')
    const [books, setBooks] = useState<any[]>();

    const handleUrl = (url: string) => {
        setUrl(url);
    }

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
        
        updateLibrary(url);
        
    }, [url]);

    return (
        <div className="container">
            <NavBar handleUrl={handleUrl} />
            {!books && (<p>Loading books...</p>)}
            {!!books && <BookList books={books} updateLibrary = {updateLibrary}/>}
        </div>
    );
}