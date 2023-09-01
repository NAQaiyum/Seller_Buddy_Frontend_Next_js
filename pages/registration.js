// import axios from "axios";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const SignUp = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const response = await axios.post("localhost:3001/admin/insertadmin", data);
//       console.log(response.data);
//       setLoading(false);
//       router.push('/login');
//     } catch (error) {
//       //setError(error.response?.data?.message || "Something went wrong!");
//       //setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
//       <center><h1 className="text-2xl font-bold mb-4">Register</h1></center>
//       <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-4">
//           <label htmlFor="id">Id</label>
//           <input
//             {...register("id", { required: true })}
//             type="number"
//             id="id"
//             name="id"
//             className="border border-gray-400 rounded w-full p-2"
//           />
//           {errors.name && <span className="text-red-500">Id is required</span>}
//         </div>


//         <div className="mb-4">
//           <label htmlFor="name">Name</label>
//           <input
//             {...register("name", { required: true })}
//             type="text"
//             id="name"
//             name="name"
//             className="border border-gray-400 rounded w-full p-2"
//           />
//           {errors.name && <span className="text-red-500">Name is required</span>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="phone">Contact</label>
//           <input
//             {...register("phone", { required: true })}
//             type="text"
//             id="phone"
//             name="phone"
//             className="border border-gray-400 rounded w-full p-2"
//           />
//           {errors.phone && <span className="text-red-500">Contact is required</span>}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="Gen">Gender</label>
//           <input
//             {...register("Gen", { required: true })}
//             type="text"
//             id="Gen"
//             name="Gen"
//             className="border border-gray-400 rounded w-full p-2"
//           />
//           {errors.Gen && <span className="text-red-500">Gender is required</span>}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email">Email</label>
//           <input
//             {...register("email", { required: true })}
//             type="email"
//             id="email"
//             name="email"
//             className="border border-gray-400 rounded w-full p-2"
//           />
//           {errors.email && <span className="text-red-500">Email is required</span>}
//         </div>
        
        
//         <div className="mb-4">
//           <label htmlFor="password">Password</label>
//           <input
//                   {...register("password", { required: true })}
//                   type="password"
//                   id="password"
//                   name="password"
//                   className="border border-gray-400 rounded w-full p-2"
//                 />
//                 {errors.password && <span className="text-red-500">Password is required</span>}
//               </div>
//               {/* <div className="mb-4">
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                   {...register("confirmPassword", {
//                     required: true,
//                     validate: (value) => value === watch("password"),
//                   })}
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   className="border border-gray-400 rounded w-full p-2"
//                 />
//                 {errors.confirmPassword?.type === "required" && (
//                   <span className="text-red-500">Confirm password is required</span>
//                 )}
//                 {errors.confirmPassword?.type === "validate" && (
//                   <span className="text-red-500">Passwords do not match</span>
//                 )}
//               </div> */}

              
//               {error && <p className="text-red-500">{error}</p>}
//               <button
//                 type="submit"
//                 className={`bg-blue-500 text-white py-2 px-4 rounded ${
//                   loading ? "opacity-50 cursor-wait" : ""
//                 }`}
//                 disabled={loading}
//               >
//                 {loading ? "Signing up..." : "Sign up"}
//               </button>
//             </form>
//           </div>
// );
// };

// export default SignUp;          




// import { useState } from 'react';

// import axios from 'axios';

// import { useRouter } from 'next/router';

 

// export default function Register() {

//   const router = useRouter();

//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   const handleRegister = async () => {

//     try {


//       const response = await axios.post('https://localhost:3001/admin/insertadmin', {
      
//         id,
//         name,
//         contact,
//         gender,
//         email,
//         password,

//       });

//       if (response.data.id) {

//         router.push('/login'); // Redirect to login page after successful registration

//       }

//     } catch (error) {

//       console.error('Error registering:', error);

//     }

//   };

 

//   return (

//     <div className="flex justify-center items-center h-screen">

//       <div className="w-1/3 p-6 border rounded shadow">

//         <h2 className="text-2xl font-bold mb-4">Register</h2>
//         <input

//           type="number"

//           placeholder="id"

//           className="w-full p-2 border rounded mb-2"

//           value={id}

//           onChange={(e) => setId(e.target.value)}

//         />
//         <input

//           type="string"

//           placeholder="name"

//           className="w-full p-2 border rounded mb-2"

//           value={name}

//           onChange={(e) => setName(e.target.value)}

//         />

//         <input

//           type="number"

//           placeholder="contact"

//           className="w-full p-2 border rounded mb-2"

//           value={contact}

//           onChange={(e) => setContact(e.target.value)}

//         />

//         <input

//           type="string"

//           placeholder="gender"

//           className="w-full p-2 border rounded mb-2"

//           value={gender}

//           onChange={(e) => setGender(e.target.value)}

//         />
//         <input

//           type="email"

//           placeholder="email"

//           className="w-full p-2 border rounded mb-2"

//           value={email}

//           onChange={(e) => setEmail(e.target.value)}

//         />

//         <input

//           type="string"

//           placeholder="password"

//           className="w-full p-2 border rounded mb-2"

//           value={password}

//           onChange={(e) => setPassword(e.target.value)}

//         />

//         <button

//           className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded"

//           onClick={handleRegister}

//         >

//           Register

//         </button>

//       </div>

//     </div>

//   );

// }







import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post("http://localhost:3001/admin/insertadmin", data);
  //     console.log(response.data);
  //     router.push('/login');
  //   } catch (error) {
  //     setError(error.response?.data?.message || "Something went wrong!");
  //   }
  // };
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/admin/insertadmin", data);
      console.log(response.data);
      router.push('/login');
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message.join(", "));
      } else {
        setError("Something went wrong!");
      }
    }
  };
  

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <center><h1 className="text-2xl font-bold mb-4">Register</h1></center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="id">Id</label>
          <input
            {...register("id", { required: true })}
            type="number"
            id="id"
            name="id"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.name && <span className="text-red-500">Id is required</span>}
        </div>


        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="contact">Contact</label>
          <input
            {...register("contact", { required: true })}
            type="number"
            id="contact"
            name="contact"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.contact && <span className="text-red-500">Contact is required</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="gender">Gender</label>
          <input
            {...register("gender", { required: true })}
            type="text"
            id="gender"
            name="gender"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.gender && <span className="text-red-500">Gender is required</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 rounded w-full p-2"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
        
        
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
                  {...register("password", { required: true })}
                  type="password"
                  id="password"
                  name="password"
                  className="border border-gray-400 rounded w-full p-2"
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              
        {error && <p className="text-red-500">{error}</p>}
        <center><button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Register
        </button></center>
      </form>
    </div>
  );
};

export default SignUp;
