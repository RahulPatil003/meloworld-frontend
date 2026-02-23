import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>

      {/* Title */}
      <h2 className="text-[20px] font-semibold text-[#FF7A00] mb-6">
        Login to your account
      </h2>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-sm text-[#FF7A00] mb-1">
          Mail Id
        </label>
        <input
          type="email"
          placeholder="Enter your mail id"
          className="w-full px-4 py-3 rounded-full border border-[#FF7A00]
                     outline-none text-[#374151]
                     placeholder-[#9CA3AF]"
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
            placeholder="Enter password"
            className="w-full px-4 py-3 pr-12 rounded-full border border-[#FF7A00]
                       outline-none text-[#374151]
                       placeholder-[#9CA3AF]"
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

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm text-[#6B7280] mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-[#FF7A00]" />
          Remember my details
        </label>

        <span className="text-[#FF7A00] cursor-pointer">
          Forgot Password?
        </span>
      </div>

      {/* Login Button */}
      <button className="w-full bg-[#FF7A00] text-white py-3 rounded-full font-medium mb-6 flex items-center justify-center gap-2">
        Next
        <span>›</span>
      </button>

      {/* Bottom Link */}
      <div className="text-center text-sm text-[#6B7280]">
        Don’t have an account?{" "}
        <span className="text-[#FF7A00] font-medium cursor-pointer">
          Sign Up
        </span>
      </div>

    </AuthLayout>
  );
};

export default Login;