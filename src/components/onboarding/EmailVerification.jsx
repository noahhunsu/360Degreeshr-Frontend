import { Link } from "react-router-dom";
import check_email from "/src/assets/onboarding/check_email.jpg"
import { CircleCheckBig, MoveLeft } from 'lucide-react';


export default function EmailVerification() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 md:hidden">
        <img
          src={check_email}
          alt="login background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full shadow-lg overflow-hidden">
        <div className="hidden md:block relative">
          <img
            src={check_email}
            alt="forget password"
            className="w-full h-screen object-cover"
          />

          <div className="absolute bottom-3 left-2 bg-transparent/90 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md space-y-4">
            <h1 className="text-2xl font-semibold text-white leading-snug">
              Securing the <br /> future of workforce <br />
              management.
            </h1>

            <p className="text-white/40 text-sm leading-relaxed">
              Precision-built tools designed for the modern
              architectural HR leader. Authenticated, secure,
              and intuitive.
            </p>

          </div>
        </div>

        <div className="flex flex-col bg-black/4 border items-center justify-center p-8 md:p-12 ">
          <div className="max-w-3xl space-y-6 bg-transparent md:bg-white p-10">

            <div className="flex flex-col items-center space-y-2">
              <CircleCheckBig size={50} color="green" />
              <h1 className="text-3xl font-bold text-white md:text-gray-800 pt-5">
                Check your Email
              </h1>
              <p className="text-white md:text-gray-500 mt-2 leading-7">
                We've sent a password reset link to <br />
                <span className="font-semibold text-black">
                  alex.rivera@company.com.
                </span> Please check <br />
                your inbox and follow the instructions.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#335AB2] text-white py-3 rounded-lg hover:bg-[#244EA5] transition"
            >
              RESEND LINK
            </button>

            <hr className="text-gray-300" />

            <div className="w-full flex flex-col space-y-7 text-sm items-center mx-auto pt-3 justify-center text-gray-600">
              <Link
                to="/"
                className="text-md text-white md:text-[#335AB2] hover:underline flex items-center gap-3"
              >
                <MoveLeft size={20} /> Back to sign in
              </Link>

              <p className="w-full text-white md:text-[#586064] text-sm text-center">
                Didn't receive an email? Check your spam folder or
                <span className="text-white md:text-[#335AB2]"> contact <br /> support</span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

