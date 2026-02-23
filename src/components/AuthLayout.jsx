// src/components/AuthLayout.jsx
import logo from "../assets/logo.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-[#F4F4F4] flex items-center justify-center">

        <div className="w-full max-w-[480px] px-10">

          {/* Logo */}
          <img
            src={logo}
            alt="NEXR Logo"
            className="w-10 h-auto mb-6 object-contain"
          />

          {/* Main Heading */}
          <h1 className="text-[40px] font-semibold text-[#FF7A00] mb-6 leading-tight">
            Welcome to NEXR
          </h1>

          {children}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-[#D9D4CC]" />
    </div>
  );
};

export default AuthLayout;