// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignupDetails from "./pages/SignupDetails";
import GoogleLogin from "./pages/GoogleLogin";
import LoginOtp from "./pages/LoginOtp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/signup/details" element={<SignupDetails />} />
        <Route path="/google-login" element={<GoogleLogin />} />
        <Route path="/login-otp" element={<LoginOtp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;