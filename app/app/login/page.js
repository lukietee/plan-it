import Image from "next/image";
import heart_1 from "../assets/mdi_heart_1.png";
import heart_2 from "../assets/mdi_heart.png";

import { Container } from "postcss";

export default function Home() {
  return (
    <>
    <nav className="flex items-center justify-between p-5 h-16 bg-primary">
        <div className= "flex gap-5 items-center">
          <a href="" className="text-xl font-bold text-secondary hover:text-blue-600">Plan-It</a>
        </div>
    </nav>

    <div className="h-10 bg-secondary">
    </div>

    <div className="bg-primary vertical-align:middle">
        <div className="bg-secondary vertical-align:middle">
            
            <div className="py-4">
            <p className="text-primary text-lg font-bold">
                Login
            </p>
            </div>

            <div className="py-4">
            <input type="text" name="email" id="email" class="text-base text-primary placeholder:text-primary focus:outline-none bg-stone-200 rounded-md" placeholder="Email Address">
            </input>
            </div>

            <div className="py-4">
            <input type="text" name="password" id="password" class="text-base text-primary placeholder:text-primary focus:outline-none bg-stone-200 rounded-md" placeholder="Password">
            </input>
            </div>

            <div className="py-4">
            <button className="text-secondary bg-primary rounded-md hover:text-stone-300">
                Login
            </button>
            </div>

        </div>
    </div>

    </>
  );
}