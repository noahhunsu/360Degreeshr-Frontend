import { Routes, Route } from "react-router-dom";
import Login from "./components/onboarding/Login"
import ForgetPassword from "./components/onboarding/ForgetPassword";
import EmailVerification from "./components/onboarding/EmailVerification";
import SSO from "./components/onboarding/SSO";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgetPassword/>} />
            <Route path="/verify-email" element={<EmailVerification/>} />
            <Route path="/signin-with-sso" element={<SSO/>} />
        </Routes>
    );
}
