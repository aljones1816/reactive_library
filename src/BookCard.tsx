import './styles/bookcard.css';
import {FaWindowClose} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import React, { useState } from 'react';

type BookCardProps = {
    handleDelete: (e: React.MouseEvent<HTMLButtonElement>| React.MouseEvent<SVGElement,MouseEvent>) => void;
    handleEditBook: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement,MouseEvent>) => void;
    book: any;
    updateLibrary: (arg: string) => void;
};
const BookCard= (props: BookCardProps) => {
    const { handleDelete,handleEditBook, book, updateLibrary} = props;
    const [theBook, setTheBook] = useState(book);
    const handleUdpate = () => {
        let tempBook = {
            title : theBook.title,
            author: theBook.author,
            pages: theBook.pages,
            status: !theBook.status,
            id: theBook.id
        }
        setTheBook(tempBook);
        fetch('http://localhost:8000/books/' + theBook.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tempBook)
        }).then(() => {
            updateLibrary('http://localhost:8000/books/');
            
        })



    }

    return (
        <div id = {theBook.id} className='bookCard'>
            <button onClick = {handleUdpate} className = "update-button">Update status</button>
            <FaWindowClose className = "delete-button" onClick = {(e)=> {handleDelete(e)}}/>
            <AiFillEdit className = "edit-button" onClick={(e) => { handleEditBook(e) }}/>
            <h2>{theBook.title}</h2>
            <p>Written by {theBook.author}</p>
            <p>{theBook.pages} pages</p>
            {!!theBook.status && (<p>Read</p>)}
            {!theBook.status && (<p>Not read</p>)}
            
            
        </div>
    )
}

export default BookCard