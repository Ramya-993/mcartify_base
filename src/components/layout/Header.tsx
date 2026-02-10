"use client";
import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <a className="text-xl font-bold">ShopLogo</a>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/categories">
            <a>Categories</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/cart">
            <a>
              <ShoppingCart className="h-5 w-5" />
            </a>
          </Link>
          <Link href="/account">
            <a>
              <User className="h-5 w-5" />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;