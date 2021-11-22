import { useState } from "react";
import { projectFirestore } from './firebase/config'
import { useAuthContext } from "./hookDrawer/useAuthContext";


interface AddBookProps {
    updateLibrary(): void;
    toggleModal: any;

}
const AddBook = (props: AddBookProps) => {

    const { updateLibrary, toggleModal} = props;
    const { user } = useAuthContext();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [status, setStatus] = useState(false);
    const [userID, setUserID] = useState(user.uid)
    

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const book = { title, pages, author, status, userID };

        
        projectFirestore.collection('books').add(book)
        .then(() => {
            setTitle('');
            setAuthor('');
            setPages('');
            setStatus(false);
        }).then(() => {
            updateLibrary();
        }).then(() => {
            toggleModal(false);
        })

        
        
    }

    return (
        <div className="add-book">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Number of pages:</label>
                <input
                    type="number"
                    required
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}

                />
                <label>Read status:</label>
                <input
                    type="checkbox"
                    onChange={(e) => setStatus(!status)}
                />
                <div className="form-buttons">
                <button className = "button" type="submit">Add</button>
                <button className = "cancel-button" type="button" onClick ={ () => {toggleModal(false)}}>Cancel</button>
                </div>
            </form>
            


        </div>
    );
}

export default AddBook;