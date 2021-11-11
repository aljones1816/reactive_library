import { useEffect, useState } from "react";
import './editbook.css';


interface EditProps {
    bookToEdit: any;
    updateLibrary: (arg: string) => void;
    resetBookToEdit: (arg: any) => void;
}


const EditBook = (props: EditProps) => {
    const bookToEdit = props.bookToEdit;
    const updateLibrary = props.updateLibrary;
    const resetBookToEdit = props.resetBookToEdit;

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [id, setID] = useState(bookToEdit.id);


    useEffect(() => {
        setTitle(bookToEdit.title);
        setAuthor(bookToEdit.author);
        setPages(bookToEdit.pages);
        setID(bookToEdit.id);

    }, [bookToEdit]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        const editedBook = { title, pages, author };

        fetch('http://localhost:8000/books/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedBook)
        }).then(() => {
            updateLibrary('http://localhost:8000/books/');
            resetBookToEdit(undefined);
        })


    }

        return (
            <div className = "modal-background" onClick={(event: React.MouseEvent<HTMLElement>) => {
                resetBookToEdit(undefined)
            }}>
            <div className="add-book modal">
                <h2>Edit book {bookToEdit.title}</h2>
                <form >
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
                        value={bookToEdit.pages}
                        onChange={(e) => setPages(e.target.value)}

                    />
                    <button onClick={handleSubmit}>Save</button>

                </form>


            </div>
            </div>
        )
    
}

export default EditBook;