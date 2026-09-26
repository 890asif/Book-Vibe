import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/book.ico";

const Footer = () => {
    return (
        <div className='mt-15 border-t border-gray-200'>
          <div className="flex flex-col items-center gap-3 px-3 py-5 text-center sm:flex-row sm:justify-between sm:px-6 md:px-10">

             <div className='flex items-center gap-4'>
             <Image
              src={Logo}
              alt="Book Vibe Logo"
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />

            <h2 className='text-sm font-bold text-gray-800 sm:text-base'>Book Vibe</h2>
           </div>

           <p className='text-sm text-gray-500'>© 2026 Book Vibe — Your Personal Book Library. Discover books, build your collection.
            </p>
          </div>
        </div>
    );
};

export default Footer;