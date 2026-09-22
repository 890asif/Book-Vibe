'use client';
import { BookContext } from '@/contexts/BooksContext';
import { IBook } from '@/type/booksType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const ReadButton = ({book}: {book: IBook}) => {
   
    const {readBooks, setReadBooks} = useContext(BookContext)
    
const handleReadBook = ()=>{
    console.log('read book btn triggerd', book);
    setReadBooks([...readBooks, book]);

    toast.success(`You have read "${book.bookName}" to your readlist`);

}
    
    return (
            <button onClick={() => handleReadBook()} className="btn bg-white hover:bg-[#00b87a] text-gray-800 border botder-gray-700 hover:text-white px-8">
                        Read
                    </button>
    );
};

export default ReadButton;



