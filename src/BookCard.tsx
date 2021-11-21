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
   
    const handleUdpate = () => {
        let tempBook = {
            title : book.title,
            author: book.author,
            pages: book.pages,
            status: !book.status,
            id: book.id
        }
        
        fetch('http://localhost:8000/books/' + book.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tempBook)
        }).then(() => {
            updateLibrary('http://localhost:8000/books/');
            
        })



    }

    return (
        <div id = {book.id} className='bookCard'>
            <button onClick = {handleUdpate} className = "update-button">Update status</button>
            <FaWindowClose className = "delete-button" onClick = {(e)=> {handleDelete(e)}}/>
            <AiFillEdit className = "edit-button" onClick={(e) => { handleEditBook(e) }}/>
            <h2>{book.title}</h2>
            <p>Written by {book.author}</p>
            <p>{book.pages} pages</p>
            {!!book.status && (<p>Read</p>)}
            {!book.status && (<p>Not read</p>)}
            
            
        </div>
    )
}

export default BookCard