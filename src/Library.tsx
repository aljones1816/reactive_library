import { useEffect, useState } from "react";
import {BookList} from "./BookList";
import NavBar from "./NavBar";
import "./styles/library.css"
import { projectFirestore } from "./firebase/config";

export const Library = () => {
    const [url, setUrl] = useState('http://localhost:8000/books/')
    const [books, setBooks] = useState<any[]>();

    const handleUrl = (url: string) => {
        setUrl(url);
    }

    const updateLibrary = (): any => {
        projectFirestore.collection('books').get().then((snapshot) => {
            let results: any[] = [];
            snapshot.docs.forEach(doc => {
                results.push({id: doc.id, ...doc.data()})
            })
            setBooks(results)
        })
            
    };


    useEffect(() => {
        updateLibrary();
    }, []);

    return (
        <div className="container">
            <NavBar handleUrl={handleUrl} />
            {!books && (<p>Loading books...</p>)}
            {!!books && <BookList books={books} updateLibrary = {updateLibrary}/>}
        </div>
    );
}