import Banner from '@/components/homePage/Banner';
import Books from '@/components/homePage/Books';
import { Gentium_Book_Plus } from 'next/font/google';
import React from 'react';

const page = () => {
    return (
        <div>
           <Banner></Banner>
           <Books></Books>
        </div>
    );
};

export default page;