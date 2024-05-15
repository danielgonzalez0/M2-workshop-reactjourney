import Link from 'next/link';
import React from 'react';
import MenuItem from './menuItem';

const FilterNav = ({ categories, currentCategory }) => {
  return (
    <nav className='flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col'>
      <MenuItem isActive={!currentCategory} item="">All</MenuItem>
      {categories.map(category => <MenuItem item={category} isActive={category === currentCategory} key={category}>{category}</MenuItem>)}
    </nav>
  );
};

export default FilterNav;