import './styles/bookcard.css';
import {FaWindowClose} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import React from 'react';

type BookCardProps = {
    handleDelete: (e: React.MouseEvent<HTMLButtonElement>| React.MouseEvent<SVGElement,MouseEvent>) => void;
    handleEditBook: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement,MouseEvent>) => void;
    book: any;
};
const BookCard= (props: BookCardProps) => {
    const { handleDelete,handleEditBook, book} = props;

    return (
        <div id = {book.id} className='bookCard'>
            <button className = "update-button">Update status</button>
            <FaWindowClose className = "delete-button" onClick = {(e)=> {handleDelete(e)}}/>
            <AiFillEdit className = "edit-button" onClick={(e) => { handleEditBook(e) }}/>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            {!!book.status && (<p>Read</p>)}
            {!book.status && (<p>Not read</p>)}
            
            
        </div>
    )
}

export default BookCard