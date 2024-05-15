"use client"

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

const MenuItem = ({ item, children, isActive }) => {
  return (
    <Link href={`/?category=${item}`} key={item} className={clsx("rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200", { "font-bold": isActive })}>
      {children}
    </Link>
  );
};

export default MenuItem;