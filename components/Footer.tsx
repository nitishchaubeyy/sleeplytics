import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 border-t border-white/40 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Logo and Tagline */}
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h2 className='text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
              Sleeplytics
            </h2>
            <p className='text-gray-600 text-sm'>
              Track your sleep, improve your health.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex space-x-4'>
            {['/', '/about', '/contact'].map((path, i) => (
              <Link
                key={i}
                href={path}
                className='text-gray-700 hover:text-pink-600 transition text-sm font-medium'
              >
                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 text-center text-gray-500 text-xs'>
          © {new Date().getFullYear()} Sleeplytics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
