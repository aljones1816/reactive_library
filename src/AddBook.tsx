import { useState } from "react";

const AddBook = ({ handler }: { handler: any }) => {

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
        })

        handler();
    }

    return (
        <div className="add-book">
            <h1>Add a New Book</h1>
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
                    onChange={(e) => setStatus(true)}
                />
                <button>Add book</button>
            </form>


        </div>
    );
}

export default AddBook;