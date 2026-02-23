import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import SuccessModal from "../components/SuccessModal";

const ForgotPassword = () => {
  const [modalType, setModalType] = useState(null);

  const handleRequest = () => {
    // 🔥 Dummy logic (replace with API later)

    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
      setModalType("forgotSuccess");
    } else if (random === 1) {
      setModalType("forgotFailed");
    } else {
      setModalType("forgotWarning");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-[20px] font-semibold text-[#FF7A00] mb-6">
        Forgot Password
      </h2>

      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block text-[14px] font-medium text-[#FF7A00] mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-full border border-[#FF7A00] outline-none"
          />
        </div>

        <div className="flex-1">
          <label className="block text-[14px] font-medium text-[#FF7A00] mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-full border border-[#FF7A00] outline-none"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-[14px] font-medium text-[#FF7A00] mb-1">
          Mail Id
        </label>
        <input
          type="email"
          placeholder="Enter your mail id"
          className="w-full px-4 py-3 rounded-full border border-[#FF7A00] outline-none"
        />
      </div>

      <div className="mb-6">
        <label className="block text-[14px] font-medium text-[#FF7A00] mb-1">
          Organisation
        </label>
        <input
          type="text"
          placeholder="Organisation Name"
          className="w-full px-4 py-3 rounded-full border border-[#FF7A00] outline-none"
        />
      </div>

      <button
        onClick={handleRequest}
        className="w-full bg-[#FF7A00] text-white py-3 rounded-full font-medium"
      >
        Request Credentials
      </button>

      {modalType && (
        <SuccessModal
          type={modalType}
          close={() => setModalType(null)}
        />
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;