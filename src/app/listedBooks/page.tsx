
"use client";
import React, { useContext } from "react";
import { BookContext } from "@/contexts/BooksContext";
import { IBook } from "@/type/booksType";
import ListedBooksCard from "@/components/shared/ListedBooksCard";

const ListedBookspage = () => {
  const { readBooks, wishlist } = useContext(BookContext)!;
  console.log(readBooks, wishlist);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 my-6">
      <h2 className="my-5 sm:my-6 md:my-7 bg-green-200 rounded-2xl font-bold text-2xl sm:text-3xl md:text-4xl py-5 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-center">Listed Books</h2>



      <div className="tabs tabs-border mt-15">
        <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books (${readBooks.length})`} />

        <div className="tab-content border-base-300 bg-base-100 p-10 ">
          {
            readBooks.length > 0 ? (
              readBooks.map((book: IBook) => {
                return <ListedBooksCard key={book.bookId} book = {book}></ListedBooksCard>
              })) :
              <p className="text-center text-lg font-semibold">No read books found</p>
          }
        </div>

        <input type="radio" name="my_tabs_2" className="tab" aria-label={`Wishlist Books (${wishlist.length})`} defaultChecked />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {
            wishlist.length > 0 ? (
              wishlist.map((book: IBook) => {
                return <ListedBooksCard key={book.bookId} book = {book}></ListedBooksCard>
              })) :
              <p className="text-center text-lg font-semibold">No wihlist books found</p>
          }
        </div>
      </div>
    </div>
  );
};

export default ListedBookspage;