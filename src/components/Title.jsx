import React from 'react';
import { ReactSvg } from './Header/ReactSvg';

const Title = ({children, size}) => {
  return (
    <h1 className='font-bold text-lg flex gap-3'>
      <ReactSvg size={size} />
      <span>{children}</span>
    </h1>
  );
};

export default Title;