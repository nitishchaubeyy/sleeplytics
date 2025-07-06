import React from 'react';
import getUserRecord from '@/app/actions/getUserRecord';

const AverageSleep = async () => {
  try {
    const { record, daysWithRecords } = await getUserRecord();

    const validRecord = record || 0;
    const validDays = daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;

    const averageSleep = validRecord / validDays;

    const hours = Math.floor(averageSleep);
    const minutes = Math.round((averageSleep - hours) * 60);

    return (
      <div className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-6 px-4 rounded-xl'>
        <div className='bg-white/80 backdrop-blur-md shadow-lg rounded-xl px-6 py-8 text-center'>
          <h4 className='text-base font-medium text-gray-600 mb-2'>
            Your Average Sleep Last Month
          </h4>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            {hours} hours {minutes} minutes
          </h1>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching user record:', error);
    return (
      <div className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-6 px-4 rounded-xl'>
        <div className='bg-white/80 backdrop-blur-md shadow-lg rounded-xl px-6 py-8 text-center'>
          <h4 className='text-base font-medium text-gray-600 mb-2'>Error</h4>
          <p className='text-red-600'>Unable to calculate average sleep.</p>
        </div>
      </div>
    );
  }
};

export default AverageSleep;
