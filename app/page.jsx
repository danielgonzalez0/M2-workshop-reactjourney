"use client"
import React from 'react';
import Header from '../src/components/Header/Header';
import { REACT_CARDS } from '@/src/react-cards';
import FilterNav from '@/src/components/filterNav/FilterNav';

const page = ({searchParams}) => {

const currentCategory = searchParams.category;
const categories = [...new Set(REACT_CARDS.map(card => card.category))]

  return (
    <main className='mx-auto max-w-4xl flex flex-col px-4'>
      <Header />
      <div className='mb-4 mt-8 py-2 flex flex-1 gap-4 overflow-auto max-lg:flex-col'>
        <FilterNav categories={categories} currentCategory={currentCategory}/>
        <div className=''>cards</div>

      </div>
    </main>
  );
};

export default page;