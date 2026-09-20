import React from 'react';
import BookCard from '../shared/BookCard';
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
      <section>
        <div className='text-center mb-10 space-y-2'>
            <h3 className='text-[#00D390] font-bold'>Our Collections</h3>
            <h2 className='text-3xl font-bold text-gray-800'>Explore Popular Books</h2>
            <p className='text-gray-500'>Discover amazing stories, timeless classics, and inspiring books from talented authors.</p>
        </div>
            <div className=' px-10 grid grid-cols-3 gap-6'>
                {
            booksData.slice(0, 6).map((book:IBook) =>{
                return <BookCard key={book.bookId} book={book}></BookCard>
                
            })
        }
            </div>
      </section>
    );
};

export default Books;