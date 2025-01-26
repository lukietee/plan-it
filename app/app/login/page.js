import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between p-5 h-16 bg-rose-400">
        <div className= "flex gap-5 items-center">
          <a href="" className="text-xl font-bold text-stone-50 hover:text-blue-600 px-10">Plan-It</a>
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
    </div>
    </>
  );
}