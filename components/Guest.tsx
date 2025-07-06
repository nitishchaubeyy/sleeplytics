'use client';
import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 text-gray-800'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20'>
        {/* Text Content */}
        <div className='flex-1 mb-12 md:mb-0'>
          <h1 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            Welcome to Sleeplytics!
          </h1>
          <p className='md:text-xl text-gray-700 mb-6'>
            Track your sleep, improve your health, and wake up feeling refreshed with Sleeplytics.
          </p>
          <SignInButton>
            <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-6 py-2 rounded-md font-medium shadow-md transition-all duration-300'>
              Get Started
            </button>
          </SignInButton>
        </div>

        {/* Illustration */}
        <div className='flex-1 flex justify-center'>
          <img
            src='/sleep.png'
            alt='Sleeplytics Illustration'
            className='w-full max-w-md rounded-tl-3xl rounded-br-3xl shadow-lg'
          />
        </div>
      </div>

      {/* FAQs */}
      <section className='py-20 px-6 bg-white/70 backdrop-blur-md'>
        <h2 className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Frequently Asked Questions
        </h2>
        <div className='max-w-3xl mx-auto space-y-8 text-gray-700'>
          <div>
            <h3 className='text-xl font-semibold'>What is Sleeplytics?</h3>
            <p>Sleeplytics helps you monitor your sleep patterns and improve your overall health.</p>
          </div>
          <div>
            <h3 className='text-xl font-semibold'>How does it work?</h3>
            <p>We analyze your sleep data and provide personalized insights to help you sleep better.</p>
          </div>
          <div>
            <h3 className='text-xl font-semibold'>Is Sleeplytics free?</h3>
            <p>
              Yes, we offer a free plan with basic features. Premium plans unlock more analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 px-6 bg-white/80 backdrop-blur-lg'>
        <h2 className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          What Our Users Say
        </h2>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
            {
              quote:
                'Sleeplytics has completely transformed my sleep schedule. I feel more energized every day!',
              name: 'Saurabh S.',
            },
            {
              quote:
                'The insights from Sleeplytics helped me fix my sleep issues. Highly recommend it!',
              name: 'Ketan C.',
            },
            {
              quote:
                "It's so easy to use and provides accurate data. Must-have for anyone serious about sleep!",
              name: 'Akash P.',
            },
          ].map(({ quote, name }, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-md text-gray-700 border border-gray-200'
            >
              <p className='mb-4'>&ldquo;{quote}&rdquo;</p>
              <p className='font-semibold text-purple-600'>- {name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Guest;
