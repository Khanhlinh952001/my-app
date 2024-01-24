import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='bg-gray-200 h-screen flex  justify-center'>
        <div className='text-center'>
          <Link href='/TestPage'>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300'>
              Thi Đọc
            </button>
          </Link>

         <Link href='/Vocabulary'>
            <button className='mt-4 bg-blue-500 ml-8 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300'>
              Kiem tra tu vung
            </button>
          </Link>

         
        </div>
      </div>
    </main>
  );
}
