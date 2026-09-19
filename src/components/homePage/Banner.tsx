import Image from 'next/image';
import React from 'react';
import Hero from '@/assets/book1.png'

const Banner = () => {
    return (
        <section className='px-20 py-10' >
            <div className=' bg-[#F3F3F3] rounded-2xl grid grid-cols-2 gap-4 items-center px-10 py-10'>
            <div className='pl-15'>
                <h2 className='font-bold text-5xl text-gray-800 mb-10'>Books to freshen up your bookshelf</h2>
                <button className="btn btn-success">View The List</button>
            </div>

            <div>
                <Image src={Hero}></Image>
            </div>
        </div>
        </section>
    );
};

export default Banner;