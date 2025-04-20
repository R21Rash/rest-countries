import React, { useState } from "react";
import Button from "../../components/Atoms/Button/Button.jsx";
import {
  loginUser,
  registerUser,
  signInWithGoogle,
} from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const res = isLogin
        ? await loginUser(email, password)
        : await registerUser(email, password);
      alert(`✅ ${isLogin ? "Logged in" : "Registered"}: ${res.user.email}`);
      if (isLogin) navigate("/HomePage");
    } catch (error) {
      alert("❌ Auth error: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      alert("✅ Logged in with Google: " + result.user.email);
    } catch (error) {
      alert("❌ Google Sign-in Error: " + error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔲 Semi-transparent card */}
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 sm:p-10">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🌍</div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-gray-600 text-sm">
            {isLogin ? "Login to explore countries" : "Sign up to get started"}
          </p>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={handleSubmit}
          label={isLogin ? "Login" : "Register"}
          className="w-full flex items-center justify-center gap-2"
        />

        <Button
          onClick={() => setIsLogin(!isLogin)}
          className="w-full items-center mt-2 justify-center"
          variant={"ghost"}
          label={
            isLogin
              ? "Don't have an account? Register here"
              : "Already have an account? Login"
          }
        />

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative text-center">
            <span className="bg-white px-2 text-sm text-gray-500">OR</span>
          </div>
        </div>

        <Button
          onClick={handleGoogleSignIn}
          variant={"outlineGray"}
          className="w-full flex items-center justify-center gap-2"
          icon={
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
          }
          label={"Sign in with Google"}
        />
      </div>
    </div>
  );
};

export default AuthPage;
