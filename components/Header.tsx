import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  await checkUser()
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          MoneyIQ
        </Link>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            {/* Dashboard Button */}
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="flex items-center gap-2 text-gray-700 border-gray-300"
              >
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            {/* Add Transaction Button */}
            <Link href="/transaction/create">
              <Button className="flex items-center gap-2 text-white">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>

            {/* User Avatar */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="border-gray-300 text-gray-700">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
