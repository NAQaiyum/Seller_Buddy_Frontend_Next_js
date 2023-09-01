import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function App() {
  const [user, setUser] = useState([]);

  async function fetchUser() {
    try {
      const response = await axios.get("http://localhost:3001/user/alluser");
      setUser(response.data);
    } catch (error) {
      console.error("The Error is:", error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
        All User Information
      </h2>
      <ul className="space-y-4">
        {user.map((us) => (
          <li
            key={us.id}
            className="border border-gray-300 p-4 rounded shadow-lg bg-white"
          >
            <h2 className="text-xl font-semibold text-blue-700">Name:</h2>
            <p className="text-gray-800">{us.name}</p>
            <h3 className="text-lg font-semibold text-blue-700">Password:</h3>
            <p className="text-gray-800">{us.password}</p>
            <h2 className="text-xl font-semibold text-blue-700">Contact:</h2>
            <p className="text-gray-800">{us.contact}</p>
            <h2 className="text-xl font-semibold text-blue-700">Type:</h2>
            <p className="text-gray-800">{us.type}</p>
          </li>
        ))}
      </ul>
      {/* Add a back button */}
      <Link href="/dashboard/home">
        <center><h2 className="text-blue-600 hover:underline mb-4 block">
          &larr; Back to Home
        </h2></center>
      </Link>
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// function App() {
//   const [user, setUser] = useState([]);
//   const [loggedIn, setLoggedIn] = useState(false); // Track login state

//   async function fetchUser() {
//     try {
//       const response = await axios.get("http://localhost:3001/user/alluser");
//       setUser(response.data);
//     } catch (error) {
//       console.error("The Error is:", error);
//     }
//   }

//   useEffect(() => {
//     fetchUser();
//     // Check if the user is logged in using the stored token
//     const sessionToken = Cookies.get("sessionToken");
//     if (sessionToken) {
//       setLoggedIn(true);
//     }
//   }, []);

//   if (!loggedIn) {
//     return <div>Please log in to access this page.</div>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
//         All User Information
//       </h2>
//       <ul className="space-y-4">
//         {user.map((us) => (
//           <li
//             key={us.id}
//             className="border border-gray-300 p-4 rounded shadow-lg bg-white"
//           >
//             <h2 className="text-xl font-semibold text-blue-700">Name:</h2>
//             <p className="text-gray-800">{us.name}</p>
//             <h3 className="text-lg font-semibold text-blue-700">Password:</h3>
//             <p className="text-gray-800">{us.password}</p>
//             <h2 className="text-xl font-semibold text-blue-700">Contact:</h2>
//             <p className="text-gray-800">{us.contact}</p>
//             <h2 className="text-xl font-semibold text-blue-700">Type:</h2>
//             <p className="text-gray-800">{us.type}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


