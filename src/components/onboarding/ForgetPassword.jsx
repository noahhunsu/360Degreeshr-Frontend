import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import forget_password from "/src/assets/onboarding/forget_password.jpg"
import { Mail, MoveLeft } from 'lucide-react';


export default function ForgetPassword() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 md:hidden">
        <img
          src={forget_password}
          alt="login background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full shadow-lg overflow-hidden">

        <div className="hidden md:block relative">
          <img
            src={forget_password}
            alt="forget password"
            className="w-full h-screen object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-transparent md:bg-white">

          <div className="max-w-3xl space-y-6">

            <div>
              <h1 className="text-3xl font-bold text-white md:text-gray-800">
                Forget Password
              </h1>
              <p className="text-white md:text-gray-500 mt-2">
                Enter your email address and we'll send you a link to reset
                your password.
              </p>
            </div>

            <form className="space-y-5">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-white md:text-gray-800">CORPORATE EMAIL</h1>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 text-white md:text-black border 
                        border-white md:border-black/20 rounded-lg 
                        focus:outline-none focus:ring focus:ring-black/50
                    "
                  />
                  <Mail size={18} className="absolute right-3 text-white md:text-gray-500" />
                </div>
              </div>


              <button
                type="submit"
                onClick={() => navigate("/verify-email")}
                className="w-full bg-[#335AB2] text-white py-3 rounded-lg hover:bg-[#244EA5] transition"
              >
                SEND RESET LINK
              </button>
            </form>

            <hr className="text-gray-300" />


            <div className="w-full flex text-sm items-center mx-auto pt-10 justify-center text-gray-600">
              <Link
                to="/"
                className="text-sm  text-white md:text-[#335AB2] hover:underline flex items-center gap-3"
              >
                <MoveLeft size={20} /> Back to sign in
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

