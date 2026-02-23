import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import PrivacyModal from "../components/signup/PrivacyModal";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    const { firstName, lastName, email, password } = formData;

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all required fields.");
      return;
    }

    if (!agreed) {
      alert("Please agree to the privacy policy.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    navigate("/signup/details");
  };

  return (
    <AuthLayout>

      <h2 className="text-[20px] font-semibold text-[#FF7A00] mb-2">
        Create your account
      </h2>

      {/* Name Row */}
      <div className="flex gap-4 mb-4">

        <div className="flex-1">
          <label className="block text-sm text-[#FF7A00] mb-1">
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-full border border-[#FF7A00] outline-none"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm text-[#FF7A00] mb-1">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-full border border-[#FF7A00] outline-none"
          />
        </div>

      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm text-[#FF7A00] mb-1">
          Mail Id *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          placeholder="Enter your mail id"
          className="w-full px-4 py-2 rounded-full border border-[#FF7A00] outline-none"
        />
      </div>

      {/* Password */}
      <div className="mb-1 relative">
        <label className="block text-sm text-[#FF7A00] mb-1">
          Password *
        </label>

        <input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter password"
          className="w-full px-4 py-2 pr-10 rounded-full border border-[#FF7A00] outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-[35px] text-[#FF7A00]"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <p className="text-xs text-[#9CA3AF] mb-4">
        Password should contain at least 8 characters.
      </p>

      {/* Privacy */}
      <div className="flex items-start gap-2 text-sm text-[#6B7280] mb-5">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="mt-1 accent-[#FF7A00]"
        />
        <p>
          By creating an account you are agreeing to our{" "}
          <span
            onClick={() => setShowPrivacy(true)}
            className="underline cursor-pointer text-[#FF7A00]"
          >
            privacy policy
          </span>
        </p>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full bg-[#FF7A00] text-white py-2.5 rounded-full font-medium mb-4"
      >
        Sign Up
      </button>

      <div className="text-center text-sm text-[#6B7280] mb-3">
        Or continue with
      </div>

      <button
        onClick={() => navigate("/google-login")}
        className="w-full border border-[#FF7A00] bg-[#F1F1F1] text-[#FF7A00] py-2.5 rounded-full font-medium"
      >
        Login with Google
      </button>

      <div className="text-center text-sm text-[#6B7280]">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-[#FF7A00] font-medium cursor-pointer underline"
        >
          Log In
        </span>
      </div>

      {showPrivacy && (
        <PrivacyModal close={() => setShowPrivacy(false)} />
      )}

    </AuthLayout>
  );
};

export default Signup;