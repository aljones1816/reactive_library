import { useEffect, useState } from "react";
import {BookList} from "./BookList";
import NavBar from "./NavBar";
import "./styles/library.css"
import { projectFirestore } from "./firebase/config";
import Modal from "./Modal";
import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";

export const Library = () => {
    const [books, setBooks] = useState<any[]>();
    const [loginOpen, setLoginOpen] = useState(false);
    const [dummyBook, setDummyBook] = useState();
    const [signupOpen, setsignupOpen] = useState(false);

    
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
            <NavBar filterUpdate={setBooks} setLogin = {setLoginOpen} setSignup={setsignupOpen}/>
            {!books && (<p>Loading books...</p>)}
            {!!books && <BookList books={books} updateLibrary = {updateLibrary}/>}
            {loginOpen && (
            <Modal resetBookToEdit={setDummyBook} toggleModal = {setLoginOpen} >
                <UserLogin toggleSignup = {setsignupOpen} toggleLogin = {setLoginOpen}/>
            </Modal>)
            }
            {signupOpen && (
            <Modal resetBookToEdit={setDummyBook} toggleModal = {setsignupOpen} >
                <UserSignup toggleLogin = {setLoginOpen} toggleSignup = {setsignupOpen}/>
            </Modal>)
            }
        </div>
    );
}