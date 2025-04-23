import React, { useState } from "react";
import Button from "../../components/Atoms/Button/Button.jsx";
import {
  loginUser,
  registerUser,
  signInWithGoogle,
} from "../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      const res = isLogin
        ? await loginUser(email, password)
        : await registerUser(email, password);

      toast.success(
        isLogin ? "Login successful!" : "Account created successfully!"
      );

      setTimeout(() => {
        isLogin ? navigate("/HomePage") : setIsLogin(true); // go to login screen after register
      }, 1000);
    } catch (error) {
      // Show error from backend if available
      const msg = error?.response?.data?.message || "Something went wrong!";
      toast.error(msg);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login with Google successful!");
      setTimeout(() => navigate("/HomePage"), 1000);
    } catch (error) {
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-200 via-salute-200 to-blue-300 animate-gradient-x">
      <Toaster richColors position="top-center" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_50%)] pointer-events-none" />

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
          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300" />
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
