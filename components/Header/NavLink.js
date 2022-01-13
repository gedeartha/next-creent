import Link from 'next/link';
import React from 'react';

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      {/* <a className="md:text-sm font-medium lg:text-tiny px-4 py-2 text-black hover:text-white hover:bg-primary rounded-lg"> */}
      <a className="font-quicksand font-bold px-4 py-2 text-black hover:text-white hover:bg-primary rounded-lg">
        {children}
      </a>
    </Link>
  );
}
