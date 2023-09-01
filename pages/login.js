import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/admin/login', {
        email,
        password,
      });

       if (response) {
        Cookies.set('loggedIn', 'true');
        router.push('../dashboard/home');
        //console.log('ok');
      }
    } catch (error) {
      setError('Error logging in. Please check your credentials.');
    }

    
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 p-6 border rounded shadow">
        <center><h2 className="text-2xl font-bold mb-4">Sign in to your account</h2></center>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button><br></br><br></br>

        <center>
          <Link href="/registration">
            <span className="font-medium text-blue-600 hover:text-blue-500">
              Create a new account
            </span>
          </Link>
        </center>
        
      </div>
    </div>
  );
}
