import React from "react";
import AuthLayout from "../Components/Layouts/Authlayout";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Logika autentikasi bisa ditambahkan di sini (misalnya validasi email dan password)
    
    // Jika autentikasi berhasil, arahkan ke halaman dashboard
    navigate("/");
  };

  return (
    <form className="space-y-4" onSubmit={handleSignIn}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Sign In
      </button>
    </form>
  );
};


const SignIn = () => {
  return (
    <AuthLayout type="signin">
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
