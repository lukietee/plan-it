import Image from "next/image";
import Logo from "./assets/logo.jpeg";
import UCILogo from "./assets/UCILogo.png";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between p-5 h-16 bg-rose-400">
        <div className= "flex gap-5 items-center">
          <a href="" className="text-xl font-bold text-stone-50 hover:text-blue-600">Plan-It</a>

          <a href="#" className="text-stone-50 hover:text-blue-600">
            Dating
          </a>
          <a href="#" className="text-stone-50 hover:text-blue-600">
            Businesses
          </a>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a
                href="login"
                className="bg-stone-50 text-rose-400 hover:text-blue-600 rounded-md p-2"
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href="signup"
                className="bg-stone-50 text-rose-400 hover:text-blue-600 rounded-md p-2"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex items-center p-5">
        <p className="text-rose-400 font-bold">
          Unforgettable Dates, Effortlessly Planned.
        </p>
        <p className="text-rose-400">
          Plan-It is your Guide to Hidden Gems and Must-See Spots
        </p>
        <button>Get Started</button>
        <a href="#">Already have an account? Sign In</a>
      </div>
      <>
        <Image alt="anteater" src={UCILogo} width={200} height={200} />
        <Image alt="logo" src={Logo} width={500} height={500} />
      </>
    </>
  );
}
