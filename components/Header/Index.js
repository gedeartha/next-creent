import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

export default function Header() {
  return (
    <div>
      <div className="py-2 border-b-2 border-b-slate-200 shadow-md">
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 ">
              <Link href="/">
                <Image src="/logo.png" width={65} height={50} />
              </Link>
            </div>
            <div className="flex items-center gap-x-2">
              <NavLink href="#">Layanan</NavLink>
              <NavLink href="#">Portofolio</NavLink>
              <NavLink href="#">Tim Kami</NavLink>
              <NavLink href="#">Kontak</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
