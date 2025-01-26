import Image from "next/image";
import Logo from "./assets/logo.jpeg"
import uci_Logo from "./assets/uci_logo.png"


export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between p-5 h-16 bg-rose-400">
        <div className= "flex gap-5 items-center">
          <a href="" className="text-xl font-bold text-stone-50 hover:text-blue-600">Plan-It</a>

          <a href="#" className="text-stone-50 hover:text-blue-600">Dating</a>
          <a href="#" className="text-stone-50 hover:text-blue-600">Businesses</a>
        </div>
        <div>
          <ul className="flex gap-4">
            <li><a href="login" className="bg-stone-50 text-rose-400 hover:text-blue-600 rounded-md p-2">Log in</a></li>
            <li><a href="signup" className="bg-stone-50 text-rose-400 hover:text-blue-600 rounded-md p-2">Sign up</a></li>
          </ul>
        </div>
    </nav>

    {/* content + pictures */}
    <div className="flex justify-between p-10 items-center">
      {/* content */}
      <div className="">
        {/* First header */}
        <div className='flex p-5'>
          <p className='text-rose-500 font-bold p-5 text-5xl'>
            Unforgettable Dates, Effortlessly Planned.
          </p>
        </div>
        {/* Decription */}
        <div className='flex p-5 text-lg'>
          <p className='text-rose-400 p-5'>
            Plan-It is your Guide to Hidden Gems and Must-See Spots
          </p>
        </div>
        {/* Alt signup / signin */}
        <div className='flex items-center p-5 m-5 space-x-3'>
          <button className='bg-rose-400 font-bold p-5 text-stone-50 p-5 rounded-md hover:text-stone-300'>
            Get Started
          </button>
          <a href="#">
            Already have an account? Sign In
          </a>
        </div>
      </div>

      <div>
        {/* <Image alt='anteater' src={uci_Logo} width={100} height={100} /> */}
        <Image alt='logo' src={Logo} width={600} height={600}/>
      </div>
    </div>
    </>
  );
}
