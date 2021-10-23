
const BookCard = ({ book }: { book: any }) => {

    return (
        <div>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
        </div>
    )
}

export default BookCard