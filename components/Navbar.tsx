import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { checkUser } from '@/lib/checkUser';

export default async function Navbar() {
  const user = await checkUser();
  console.log('Current User:', user);

  return (
    <nav className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 backdrop-blur-md border-b border-white/30 shadow-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Brand */}
          <Link href='/' className='text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            Sleeplytics
          </Link>

          {/* Nav Items */}
          <div className='flex items-center gap-4'>
            <Link
              href='/'
              className='hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-purple-600 transition px-3 py-2'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium text-gray-700 hover:text-purple-600 transition px-3 py-2'
            >
              About
            </Link>

            <SignedOut>
              <SignInButton>
                <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all'>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
