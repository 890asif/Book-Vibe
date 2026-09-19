import React from 'react';
import BookCard from '../shared/BookCard';
import { FaStar, FaBookOpen } from "react-icons/fa";
import { IBook } from '@/type/booksType';

const getBooks = async ()=>{
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
    return data;
}

const Books = async() => {
    const booksData = await getBooks();
    console.log(booksData)
    return (
      <section className=' px-10 grid grid-cols-3 gap-6'>
        {
            booksData.map((book:IBook) =>{
                return <BookCard key={book.bookId} book={book}></BookCard>
                
            })
        }
      </section>
    );
};

export default Books;