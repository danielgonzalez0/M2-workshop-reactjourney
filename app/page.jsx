"use client"
import React from 'react';
import Header from '../src/components/Header/Header';
import { REACT_CARDS } from '@/src/react-cards';

const page = () => {

 const filters = [...new Set(REACT_CARDS.map(card => card.category))]
console.log(filters)


  return (
    <main className='mx-auto max-w-4xl flex flex-col px-4'>
     <Header />
     hello world
    </main>
  );
};

export default page;