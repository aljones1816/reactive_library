import { useEffect, useState } from "react";
import {BookList} from "./BookList";
import NavBar from "./NavBar";
import "./styles/library.css"
import { projectFirestore } from "./firebase/config";

export const Library = () => {
    const [books, setBooks] = useState<any[]>();

    
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
            <NavBar filterUpdate={setBooks} />
            {!books && (<p>Loading books...</p>)}
            {!!books && <BookList books={books} updateLibrary = {updateLibrary}/>}
        </div>
    );
}