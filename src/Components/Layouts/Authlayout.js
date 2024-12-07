import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, type }) => {

  const Googlelogo = "/images/goggle.jpg"
  const Facebooklogo = "/images/goggle.jpg"

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          {type === "signin" ? (
            <>
              <div>Log In to your</div>
              <div>Account</div>
            </>
          ) : (
            <>
              <div>Create Your</div>
              <div>Account</div>
            </>
          )}
        </h1>

        {/* Render child form */}
        {children}

        <div className="flex items-center justify-between my-4">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        {/* Social Media Buttons */}
        {type === "signin" && ( // Hanya tampil ketika type === "signin"
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center w-10 h-10 border rounded-full">
              <img src={Googlelogo} alt="Google" className="w-6 h-6 object-cover" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 border rounded-full">
              <img
                src={Facebooklogo}
                alt="Facebook"
                className="w-6 h-6 object-cover"
              />
            </button>
          </div>
        )}

        {/* Footer Links */}
        <p className="text-sm text-center text-gray-500 mt-4">
          <p className="text-sm text-center text-gray-500 mt-4">
            {type === "signin" ? (
              <>
                New to For U?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Join Now
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Sign In
                </Link>
              </>
            )}
          </p>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
