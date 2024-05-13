"use client"

import React from 'react';
import { ReactSvg } from './ReactSvg';
import Button from '../Buttons/Button';
import { ShoppingBasket } from "lucide-react"
import { User } from "lucide-react"


const Header = () => {
  console.log('Header component is being rendered');
  return (
    <header className='flex items-center py-4 justify-between'>

      <h1 className='font-bold text-lg flex gap-3'><ReactSvg size="30" /> ReactJourney</h1>
      <div>

        <Button>
          <ShoppingBasket size="20" />
        </Button>
        <Button>
          <User size="20" />
        </Button>
      </div>
    </header>
  );
};

export default Header;