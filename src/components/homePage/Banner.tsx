import Image from 'next/image';
import React from 'react';
import Hero from '@/assets/book1.png';

const Banner = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-6 sm:px-10 lg:px-16 py-10 lg:py-14 overflow-hidden">

                {/* Content */}
                <div className="text-center lg:text-left">
                    <p className="text-green-600 font-semibold mb-3">
                        Welcome to Book Vibe
                    </p>

                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-4xl xl:text-5xl leading-tight text-gray-800 mb-6">
                        Books to freshen up your bookshelf
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                        Discover amazing books, explore new stories, and find
                        your next favorite book for your collection.
                    </p>

                    <button className="btn btn-success px-6">
                        View The List
                    </button>
                </div>

                {/* Image */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src={Hero}
                        alt="Books"
                        priority
                        className="w-64 sm:w-80 lg:w-105 xl:w-120 h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;