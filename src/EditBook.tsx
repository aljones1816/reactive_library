import { useEffect, useState } from "react";



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
            
            <div >
                <h2>Edit {bookToEdit.title}</h2>
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
                        value={pages}
                        onChange={(e) => setPages(e.target.value)}

                    />
                    <div className="form-buttons">
                    <button className = "button" onClick={handleSubmit}>Save</button>
                    <button className = "cancel-button" onClick = {() => {resetBookToEdit(undefined)}}>Cancel</button>
                    </div>
                </form>
                


            </div>
            
        )
    
}

export default EditBook;