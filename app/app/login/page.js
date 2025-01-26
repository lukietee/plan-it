import { Container } from "postcss";

export default function Home() {
  return (
    <>
    <nav className="flex items-center justify-between p-5 h-16 bg-primary">
        <div className= "flex gap-5 items-center">
          <a href="" className="text-xl font-bold text-secondary hover:text-blue-600">Plan-It</a>
        </div>
    </nav>

    <div className="bg-secondary">
        
    </div>
    <div className="bg-primary">
        
    </div>

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
          <p className='text-primary p-5'>
            Plan-It is your Guide to Hidden Gems and Must-See Spots
          </p>
        </div>
        {/* Alt signup / signin */}
        <div className='flex items-center p-5 m-5 space-x-3'>
          <button className='bg-primary font-bold p-5 text-secondary p-5 rounded-md hover:text-stone-300'>
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