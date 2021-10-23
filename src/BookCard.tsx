
const BookCard = ({ book }: { book: any }) => {

    return (
        <div>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
        </div>
    )
}

export default BookCard