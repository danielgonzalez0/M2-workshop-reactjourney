"use client"

import React from 'react';
import { cva } from "class-variance-authority"



const buttonVariant = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 transition-colors ring-offset-2 focus-visible:outline-none focus-visible:ring h-8 text-sm font-semibold ",
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-gray-50 hover:bg-gray-800",
        ghost: "bg-transparent text-gray-950 hover:bg-gray-200 active:bg-gray-300",
      }
    },
    defaultVariants: {
      variant:"default"
    }
  }
)
const Button = ({ variant, children, ...props }) => {


  return (
    <button className={buttonVariant({ variant: variant })}>
      {children}
    </button>
  );
};

export default Button;