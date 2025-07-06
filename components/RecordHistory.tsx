import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  // 🔴 Error block
  if (error) {
    return (
      <div className='bg-red-100 text-red-800 border border-red-300 rounded-md p-4 text-center'>
        <p>{error}</p>
      </div>
    );
  }

  // 🕳️ No Records
  if (!records || records.length === 0) {
    return (
      <div className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center py-10 rounded-xl'>
        <div className='bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-2xl text-center'>
          <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            No Sleep Records Found
          </h3>
          <p className='text-gray-700'>
            Start tracking your sleep to see your history here.
          </p>
        </div>
      </div>
    );
  }

  // ✅ Show Records
  return (
    <div className='bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6 rounded-xl'>
      <div className='bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 mx-auto max-w-4xl'>
        <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent border-b border-gray-200 pb-4'>
          Sleep History
        </h3>
        <ul className='space-y-4'>
          {records.map((record: Record) => (
            <RecordItem key={record.id} record={record} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecordHistory;
