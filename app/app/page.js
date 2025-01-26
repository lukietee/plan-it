import Image from "next/image";
import Logo from "./assets/logo.png";
import UCILogo from "./assets/UCILogo.png";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between p-5 h-16 bg-primary">
        <div className="flex gap-5 items-center">
          <a
            href=""
            className="text-xl font-bold text-stone-50 hover:text-blue-600"
          >
            Plan-It
          </a>

          <a href="/dating" className="text-secondary hover:text-blue-600">
            Dating
          </a>
          <a href="/businesses" className="text-secondary hover:text-blue-600">
            Businesses
          </a>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a
                href="/login"
                className="bg-secondary text-primary hover:text-blue-600 rounded-md p-2"
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="bg-secondary text-primary hover:text-blue-600 rounded-md p-2"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* content + pictures */}
      <div className="flex justify-between p-10 items-center">
        {/* content */}
        <div className="w-2/3">
          {/* First header */}
          <div className="flex p-5">
            <p className="text-primary font-bold p-5 text-7xl w-5/6">
              Unforgettable Dates, Effortlessly Planned.
            </p>
          </div>
          {/* Decription */}
          <div className="flex p-5 text-2xl">
            <p className="text-primary p-5">
              Plan-It is your Guide to Hidden Gems and Must-See Spots
            </p>
          </div>
          {/* Alt signup / signin */}
          <div className="flex items-center p-5 m-5 space-x-3">
            <button className="bg-primary font-bold text-secondary p-5 rounded-md hover:text-stone-300">
              Get Started
            </button>
            <a href="/login">Already have an account? Sign In</a>
          </div>
        </div>

        <div className="w-1/4 relative h-96">
          <Image
            alt="anteater"
            src={UCILogo}
            width={300}
            className="absolute -left-20 -top-5"
            height={300}
          />
          <Image
            alt="logo"
            src={Logo}
            width={1000}
            className="absolute z-10 w-96 h-96 top-0"
            height={1000}
          />
        </div>
      </div>
    </>
  );
}
