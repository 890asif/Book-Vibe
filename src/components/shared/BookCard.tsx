// import { IBook } from "@/type/booksType";
// import Image from "next/image";
// import Link from "next/link";
// import { FaBookOpen, FaStar } from "react-icons/fa";


// interface IBookCardProps{
//     book: IBook;
// }
// const BookCard = ({ book }:IBookCardProps) => {
//     return (
//         <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

//             {/* Image */}
//             <div className="relative bg-[#F3F3F3] h-72 flex items-center justify-center overflow-hidden">

//                 <span className="absolute top-4 left-4 z-10 bg-white/90 text-green-600 text-xs font-semibold px-3 py-1.5 rounded-full">
//                     {book.category}
//                 </span>

//                 <Image
//                     src={book.image}
//                     alt={book.bookName}
//                     width={220}
//                     height={280}
//                     className="h-64 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
//                 />
//             </div>

//             {/* Content */}
//             <div className="p-6">

//                 {/* Rating */}
//                 <div className="flex items-center gap-2 mb-3">
//                     <div className="flex items-center gap-1 text-yellow-500">
//                         <FaStar />

//                         <span className="font-semibold text-gray-700">
//                             {book.rating}
//                         </span>
//                     </div>

//                     <span className="text-gray-400">•</span>

//                     <span className="text-sm text-gray-500">
//                         {book.totalPages} pages
//                     </span>
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
//                     {book.bookName}
//                 </h2>

//                 {/* Author */}
//                 <p className="text-gray-500 mt-2 mb-4">
//                     by{" "}
//                     <span className="font-medium text-gray-700">
//                         {book.author}
//                     </span>
//                 </p>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-5">
//                     {book.tags.map((tag) => (
//                         <span
//                             key={tag}
//                             className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
//                         >
//                             {tag}
//                         </span>
//                     ))}
//                 </div>

//                 {/* Bottom */}
//                 <div className="border-t border-gray-100 pt-4 flex items-center justify-between">

//                     <div>
//                         <p className="text-xs text-gray-400">
//                             Published
//                         </p>

//                         <p className="font-semibold text-gray-700">
//                             {book.yearOfPublishing}
//                         </p>
//                     </div>

//                     <Link href={`/books/${book.bookId}`}><button className="btn btn-success btn-sm gap-2">
//                         <FaBookOpen />
//                         View Details
//                     </button></Link>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default BookCard;



import { IBook } from "@/type/booksType";
import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaStar } from "react-icons/fa";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full">

      {/* Image */}
      <div className="relative bg-[#F3F3F3] h-64 sm:h-72 flex items-center justify-center overflow-hidden">

        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-white/90 text-green-600 text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
          {book.category}
        </span>

        <Image
          src={book.image}
          alt={book.bookName}
          width={220}
          height={280}
          className="h-56 sm:h-64 w-auto max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />

            <span className="font-semibold text-gray-700">
              {book.rating}
            </span>
          </div>

          <span className="text-gray-400">•</span>

          <span className="text-xs sm:text-sm text-gray-500">
            {book.totalPages} pages
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-sm sm:text-base text-gray-500 mt-2 mb-4">
          by{" "}
          <span className="font-medium text-gray-700">
            {book.author}
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-green-50 text-green-700 px-2.5 sm:px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between gap-2">

          <div className="min-w-0">
            <p className="text-xs text-gray-400">
              Published
            </p>

            <p className="text-sm sm:text-base font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <Link
            href={`/books/${book.bookId}`}
            className="shrink-0"
          >
            <button className="btn btn-success btn-xs sm:btn-sm gap-1 sm:gap-2">
              <FaBookOpen />
              <span>View Details</span>
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default BookCard;