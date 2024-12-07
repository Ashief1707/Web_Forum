import React from "react";
import AuthLayout from "../Components/Layouts/Authlayout";

const SignUpForm = () => (
  <form className="space-y-4">
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
        placeholder="Create a password"
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
      <input
        type="password"
        placeholder="Repeat a password"
        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Sign Up
    </button>
  </form>
);

const SignUp = () => {
  return (
    <AuthLayout type="signup">
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
