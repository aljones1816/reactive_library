import { useState } from "react";

interface AddBookProps {
    updateLibrary(url: string): void;
    setBool: any;

}
const AddBook = (props: AddBookProps) => {

    const { updateLibrary, setBool} = props;

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [status, setStatus] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const book = { title, pages, author, status };

        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        }).then(() => {
            console.log('new book added')
            setTitle('');
            setAuthor('');
            setPages('');
            setStatus(false);
        }).then(() => {
            updateLibrary('http://localhost:8000/books/');
        }).then(() => {
            setBool(false);
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
                    onChange={(e) => setStatus(false)}
                />
                <button>Add book</button>
            </form>
            <button onClick ={ () => {setBool(false)}}>Cancel</button>


        </div>
    );
}

export default AddBook;