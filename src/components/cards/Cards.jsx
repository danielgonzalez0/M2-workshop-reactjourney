import React from 'react';
import Title from '../Title';
import Button from '../Buttons/Button';
import { CirclePlus } from 'lucide-react';
import { BookOpenText } from 'lucide-react';

const Cards = ({ card }) => {
  return (
    <div className='flex flex-col basis-full md:basis-[48%] lg:max-w-[199px] lg:flex-grow-0 rounded-lg border-2 border-gray-200 p-4 hover:bg-gray-200 hover:border-gray-300'>
      <Title size={20}>React</Title>
      <p className='text-lg text-center font-extrabold line-clamp-1 overflow-hidden text-ellipsis pt-2'>{card.name}</p>
      <div className="flex gap-2 items-center py-2">
        <p className='line-clamp-1 text-start text-xs text-gray-400 mr-auto overflow-hidden'>{card.category}</p>
        <Button as="a" href={card.url}><BookOpenText size={15} /></Button>
        <Button as="button"><CirclePlus size={15} /></Button>
      </div>
    </div>
  );
};

export default Cards;