// import Link from 'next/link';


// export default function service() {
//     return (
//         <nav className="bg-gray-800 text-white w-48 px-2 py-6 fixed inset-y-0">
//           <div className="text-white text-xl font-bold mb-8">Service Center</div>
//           <ul className="text-white">
//           <li className="mb-4">
//           <Link href="/dashboard/online_retailing">
//                 <span className="block hover:text-gray-200">Online Retailing</span>
//               </Link>
//             </li>
//             <li className="mb-4">
//             <Link href="/dashboard/electronic_markets">
//                 <span className="block hover:text-gray-200">Electronic Markets</span>
//               </Link>
//             </li>
//             <li className="mb-4">
//             <Link href="/dashboard/online_auctions">
//                 <span className="block hover:text-gray-200">Online Auctions</span>
//               </Link>
//             </li>
    
//           </ul>
//         </nav>
//       );
//     };
  

import Link from 'next/link';

export default function Service() {
  return (
    <div className="flex">
      <div className="bg-gray-800 text-white w-48 px-2 py-6 fixed inset-y-0">
        <div className="text-white text-xl font-bold mb-8">Service Center</div>
        <ul className="text-white">
          <li className="mb-4">
            <Link href="/dashboard/online_retailing">
              <span className="block hover:text-gray-200">Online Retailing</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/electronic_markets">
              <span className="block hover:text-gray-200">Electronic Markets</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/online_auctions">
              <span className="block hover:text-gray-200">Online Auctions</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="max-w-full h-4/5 overflow-hidden bg-black">
          <img
            src="/servicehome.jpg" // Update the path to your image file
            alt="Service Homepage"
            className="h-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
}



    