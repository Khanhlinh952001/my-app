import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='bg-gray-200 h-screen flex  justify-center'>
        <div className='text-center'>
          <Link href='/Reading'>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300'>
              Thi Đọc
            </button>
          </Link>
          <Link href='/Listen'>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300'>
              Thi Nghe
            </button>
          </Link>
          {/* <Link href='/AddReading'>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300'>
              AddReading
            </button>
          </Link>

          <Link href='/AddListen'>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300'>
              AddListen
            </button>
          </Link>
 
         <Link href='/Vocabulary'>
            <button className='mt-4 bg-blue-500 ml-8 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300'>
              Kiem tra tu vung
            </button>
          </Link> */}

         
        </div>
      </div>
    </main>
  );
}
