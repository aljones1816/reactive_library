

type BookCardProps = {
    handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleEditBook: (e: React.MouseEvent<HTMLButtonElement>) => void;
    book: any;
};
const BookCard= (props: BookCardProps) => {
    const { handleDelete,handleEditBook, book} = props;

    return (
        <div id = {book.id}>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            {!!book.status && (<p>Read</p>)}
            {!book.status && (<p>Not read</p>)}
            <button onClick = {(e)=> {handleDelete(e)}}>Delete</button>
            <button onClick={(e) => { handleEditBook(e) }}>Edit Book</button>
        </div>
    )
}

export default BookCard