import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import SuccessModal from "../components/SuccessModal";

const LoginOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }

    // remove error once user starts typing again
    setError(false);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp === "1234") {
      // ✅ correct OTP
      setShowSuccessModal(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      // ❌ wrong OTP → show inline error
      setError(true);
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <AuthLayout>
      <h2 className="text-[20px] font-semibold text-[#FF7A00] mb-2">
        Login to your account
      </h2>

      <p className="text-sm text-[#FF7A00] mb-6">
        Kindly enter the OTP sent on your registered mobile number.
      </p>

      <form onSubmit={handleSubmit}>
        {/* OTP BOXES */}
        <div className="flex gap-4 mb-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-14 h-14 text-center text-lg font-semibold rounded-lg outline-none
                ${
                  error
                    ? "border-2 border-red-500"
                    : "border border-[#FF7A00]"
                }`}
            />
          ))}
        </div>

        {/* ❌ ERROR MESSAGE (LIKE FIGMA) */}
        {error && (
          <p className="text-red-600 text-sm mb-6 font-medium">
            You have entered the wrong otp. Please check again!
          </p>
        )}

        <button className="text-[#FF7A00] underline mb-8">
          Re-send OTP.
        </button>

        <button
          type="submit"
          disabled={!isOtpComplete}
          className={`w-full py-3 rounded-full font-medium flex items-center justify-center gap-2
            ${
              isOtpComplete
                ? "bg-[#FF7A00] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Log In
          <span>›</span>
        </button>
      </form>

      {/* ✅ SUCCESS MODAL ONLY WHEN CORRECT */}
      {showSuccessModal && (
        <SuccessModal
          type="loginSuccess"
          close={() => setShowSuccessModal(false)}
        />
      )}
    </AuthLayout>
  );
};

export default LoginOtp;