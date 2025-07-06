import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 text-gray-800'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center text-center py-16 px-8'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent'>
          Discover Sleeplytics
        </h1>
        <p className='text-lg md:text-xl max-w-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent'>
          Your personalized sleep companion designed to track, analyze, and help you unlock the best sleep of your life.
        </p>
      </section>

      {/* Mission Section */}
      <section className='py-16 px-8 bg-white/80 backdrop-blur-md'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Mission</h2>
        <p className='text-gray-700 max-w-3xl mx-auto text-center'>
          At Sleeplytics, we’re committed to redefining sleep wellness. By turning your sleep data into meaningful insights, we empower you to rest smarter, feel better, and live fully.
        </p>
      </section>

      {/* Features Section */}
      <section className='py-16 px-8'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Why Sleeplytics?
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white/80 backdrop-blur-md p-6 rounded-md shadow-md'>
            <h3 className='text-xl font-bold mb-2'>Smart Tracking</h3>
            <p className='text-gray-700'>
              Automatically monitor sleep cycles and duration to help you stay consistent.
            </p>
          </div>
          <div className='bg-white/80 backdrop-blur-md p-6 rounded-md shadow-md'>
            <h3 className='text-xl font-bold mb-2'>Meaningful Insights</h3>
            <p className='text-gray-700'>
              Visualize trends and get personalized tips to improve your sleep quality over time.
            </p>
          </div>
          <div className='bg-white/80 backdrop-blur-md p-6 rounded-md shadow-md'>
            <h3 className='text-xl font-bold mb-2'>Clean, Minimal UI</h3>
            <p className='text-gray-700'>
              Built for clarity, simplicity, and focus — enjoy a seamless experience across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-16 px-8 bg-white/80 backdrop-blur-md'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Story</h2>
        <p className='text-gray-700 max-w-3xl mx-auto text-center'>
          Sleeplytics was born out of a deep desire to improve how we rest. With a team of sleep scientists, developers, and designers, we created a platform that makes sleep tracking effortless and insightful — because better sleep leads to better days.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className='py-16 px-8 text-center'>
        <h2 className='text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent'>
          Ready to Sleep Smarter?
        </h2>
        <p className='text-lg mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent'>
          Join Sleeplytics and experience a more restful, data-informed way to recharge.
        </p>
        <Link
          href='/sign-up'
          className='inline-block bg-white/90 text-purple-700 hover:text-purple-800 px-6 py-3 rounded-md font-medium shadow-md transition backdrop-blur'
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
