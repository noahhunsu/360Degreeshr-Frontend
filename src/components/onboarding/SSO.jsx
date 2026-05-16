import { Link } from "react-router-dom";
import sign_sso from "/src/assets/onboarding/sign_sso.jpg"
import logo from "/src/assets/onboarding/logo.jpg"
import { LockKeyhole, ShieldAlert, MoveRight } from 'lucide-react';


export default function SSO() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative bg-white">
      <div className="absolute inset-0 md:hidden">
        <img
          src={sign_sso}
          alt="login background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden">
        <div className="hidden md:block relative">
           <div className="absolute w-full flex items-start gap-10 top-3 left-2  p-8 space-y-4">
            <img src={logo} alt="" />
          </div>
          <img
            src={sign_sso}
            alt="sign with sso"
            className="w-full h-screen object-cover"
          />
          <div className="absolute w-full flex items-start gap-10 bottom-3 left-2  p-8 space-y-4">
            <h1 className="text-2xl font-semibold text-[#2B3437] leading-snug">
              4.9/5 <br />
              <span className="text-sm font-medium ">Enterprise Grade Trust</span>
            </h1>
            <h1 className="text-2xl font-semibold text-[#2B3437] leading-snug">
              ISO <br />
              <span className="text-sm font-medium ">27001 Certified</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8 md:p-12 ">
          <div className="max-w-3xl space-y-6 p-10">
            <div className=" max-w-md space-y-4">
              <h1 className="text-2xl font-semibold text-[#2B3437] leading-snug">
                Sign In with SSO
              </h1>

              <p className="text-[#586064] text-sm leading-relaxed">
                Your organization uses Single Sign-On for a more secure
                and seamless login experience.
              </p>

            </div>
            <form className="space-y-5">
              <div className="flex flex-col space-y-2">
                <div className="max-w-md flex items-center justify-between">
                  <h1 className="text-gray-800"> ORGANIZATION ACCOUNT</h1>
                  <ShieldAlert size={18} className=" text-gray-500 absolute right-67" />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-black/20 rounded-lg pr-10"
                  />
                  <LockKeyhole size={18} className="absolute right-3 text-gray-500" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#335AB2] text-white py-3 rounded-lg hover:bg-[#244EA5] transition"
              >
                Sign in With Okta
              </button>

              <button
                type="submit"
                className="w-full bg-white border border-gray-300 text-black py-3 rounded-lg hover:bg-[#244EA5] hover:text-white transition"
              >
                Continue with Google Workspace
              </button>
            </form>

            <hr className="text-gray-300" />

            <div className="w-full flex flex-col space-y-3 text-sm items-center mx-auto pt-3 justify-center text-gray-600">
              <p className="text-[#737C7F] text-sm">
                ADMINISTRATIVE ACCESS
              </p>
              <Link
                to="/"
                className="text-md text-[#335AB2] hover:underline flex items-center gap-2"
              >
                Sign in with password <MoveRight size={20} />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

