import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null); // null | valid | invalid

  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy change afterwards with actual apis later
    if (email === "steena.sebastian@gmail.com" && password === "Steena@1990") {
        setStatus("valid");

        // 🔥 NEW: Navigate to OTP page
        setTimeout(() => {
        navigate("/login-otp");
        }, 500);

    } else {
        setStatus("invalid");
    }
    };

  return (
    <AuthLayout>
      {/* Title */}
      <h2 className="text-[20px] font-semibold text-[#FF7A00] mb-4">
        Login to your account
      </h2>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-sm text-[#FF7A00] mb-1">
          Mail Id
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your mail id"
          className={`w-full px-4 py-3 rounded-full outline-none text-[#374151] placeholder-[#9CA3AF]
            ${
              status === "valid"
                ? "border-2 border-green-500"
                : status === "invalid"
                ? "border-2 border-red-500"
                : "border border-[#FF7A00]"
            }`}
        />
      </div>

      {/* Password */}
      <div className="mb-2">
        <label className="block text-sm text-[#FF7A00] mb-1">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`w-full px-4 py-3 pr-12 rounded-full outline-none text-[#374151] placeholder-[#9CA3AF]
              ${
                status === "valid"
                  ? "border-2 border-green-500"
                  : status === "invalid"
                  ? "border-2 border-red-500"
                  : "border border-[#FF7A00]"
              }`}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-4 flex items-center text-[#FF7A00]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Validation Text */}
      {status === "valid" && (
        <p className="text-green-600 text-sm mb-4">Valid</p>
      )}

      {status === "invalid" && (
        <p className="text-red-600 text-sm mb-4">Invalid</p>
      )}

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm text-[#6B7280] mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-[#FF7A00]" />
          Remember my details
        </label>

        <span
          onClick={() => navigate("/forgot")}
          className="text-[#FF7A00] cursor-pointer"
        >
          Forgot Password?
        </span>
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-[#FF7A00] text-white py-3 rounded-full font-medium mb-6 flex items-center justify-center gap-2"
      >
        Next
        <span>›</span>
      </button>

      {/* Bottom Link */}
      <div className="text-center text-sm text-[#6B7280]">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/")}
          className="text-[#FF7A00] font-medium cursor-pointer underline"
        >
          Sign Up
        </span>
      </div>
    </AuthLayout>
  );
};

export default Login;