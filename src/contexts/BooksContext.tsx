"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { IBook } from "../type/booksType";

interface BookContextType {
  readBooks: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;

   wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BookContext = createContext<BookContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BookContext.Provider value={sharedData}>
      {children}
    </BookContext.Provider>
  );
};

export default BooksProvider;