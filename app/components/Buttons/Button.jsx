"use client"

import React from 'react';
import { cva } from "class-variance-authority"



const buttonVariant = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring text-gray-950 hover:bg-gray-300 h-8 text-sm font-semibold",
  {
    variants: {
      variant: {
        primary: "bg-gray-200"
      }
    },
    defaultVariants: {
      variant: "bg-transparent"
    }
  }
)
const Button = ({ variant, children }) => {


  return (
    <button className={buttonVariant({ variant: variant })}>
      {children}
    </button>
  );
};

export default Button;