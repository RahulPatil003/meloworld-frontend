const PrivacyModal = ({ close }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-[500px] bg-white rounded-2xl p-6 shadow-lg">

        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold text-[#FF7A00] mb-4">
          Privacy Policy
        </h2>

        <div className="text-sm text-gray-600 space-y-3 max-h-[300px] overflow-y-auto pr-2">
          <p>
            This privacy policy explains how we collect, use and protect your
            information when you use our platform.
          </p>

          <p>
            We collect only necessary information required for authentication
            and service usage.
          </p>

          <p>
            Your data is securely stored and never shared with third parties
            without your consent.
          </p>

          <p>
            By creating an account, you agree to our terms and privacy policy.
          </p>
        </div>

        <button
          onClick={close}
          className="mt-6 w-full bg-[#FF7A00] text-white py-2 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyModal;