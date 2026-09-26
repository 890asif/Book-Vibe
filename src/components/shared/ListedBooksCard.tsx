import { IBook } from '@/type/booksType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen, FaStar } from 'react-icons/fa';

interface IListedBooksCardProps {
    book: IBook
}

const listedBooksCard = ({book}: IListedBooksCardProps) => {
    return (
        <div key={book.bookId} className="group flex w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            
                  <div className="flex w-32 shrink-0 items-center justify-center rounded-xl bg-gray-100 p-3 sm:w-36">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={120}
                      height={170}
                      className="h-40 w-auto object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content - Right */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between pl-4 sm:pl-5">

                    {/* Top */}
                    <div>
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-green-600">
                          {book.category}
                        </span>

                        <div className="flex shrink-0 items-center gap-1 text-sm">
                          <FaStar className="text-yellow-400" />
                          <span className="font-semibold">{book.rating}</span>
                        </div>
                      </div>

                      <h2 className="line-clamp-2 text-lg font-bold text-gray-800 sm:text-xl">
                        {book.bookName}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        By {book.author}
                      </p>

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {book.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-green-50 px-2.5 py-1 text-xs text-green-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <p className="mt-3 text-xs text-gray-500">
                        {book.totalPages} Pages
                      </p>
                    </div>

                    {/* Button */}
                    <div className="mt-4">
                      <Link
                        href={`/books/${book.bookId}`}
                        className="btn btn-sm w-full bg-green-600 text-white hover:bg-green-700"
                      >
                        <FaBookOpen />
                        Details
                      </Link>
                    </div>

                  </div>
                </div>
    );
};

export default listedBooksCard;