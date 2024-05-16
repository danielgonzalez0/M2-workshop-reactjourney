"use client"

import React from 'react';
import Button from '../Buttons/Button';
import { ShoppingBasket } from "lucide-react"
import { User } from "lucide-react"
import Title from '../Title';


const Header = () => {
  console.log('Header component is being rendered');
  return (
    <header className='flex items-center py-4 justify-between'>

      <Title size={30}>React Journey</Title>
      <div className='flex gap-2'>
        <Button variant="ghost">
          <ShoppingBasket size="20" />
        </Button>
        <Button variant="ghost">
          <User size="20" />
        </Button>
      </div>
    </header>
  );
};

export default Header;