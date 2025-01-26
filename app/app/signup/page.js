import Image from "next/image";
import business from "../assets/business.png";
import dater from "../assets/dater.png";
import heart from "../assets/heart.png";
import Link from "next/link";

import SimpleNav from "../components/SimpleNav";

export default function SignUp() {
  return (
    <>
      <SimpleNav />

      <div className="w-full flex flex-col gap-16 items-center relative">
        <p className="pt-24 text-primary text-4xl font-bold">
          How do you want to use Plan-It?
        </p>

        <div className="w-1/2 flex justify-between">
          <section className="flex items-center flex-col">
            <Link href="/signup/dater">
              <Image
                alt="dater"
                src={dater}
                width={1000}
                height={1000}
                className="w-80 h-72 transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer"
              />
            </Link>

            <p className="text-primary pt-5 text-4xl font-bold">I am a dater</p>
          </section>

          <section className="flex items-center flex-col">
            <Link href="/signup/business">
              <Image
                alt="dater"
                src={business}
                width={1000}
                height={1000}
                className="w-80 h-72 transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer"
              />
            </Link>

            <p className=" text-primary pt-5 text-4xl font-bold">
              I am a business
            </p>
          </section>
        </div>

        <Image
          alt="heart"
          className="absolute rotate-45 w-20 h-20 bottom-56 left-24"
          src={heart}
          draggable="false"
        />
        <Image
          alt="heart"
          className="absolute -rotate-45 w-20 h-20 bottom-20 left-10"
          src={heart}
          draggable="false"
        />
        <Image
          alt="heart"
          className="absolute rotate-45 w-20 h-20 -bottom-10 left-24"
          src={heart}
          draggable="false"
        />
        <Image
          alt="heart"
          className="absolute rotate-45 w-20 h-20 bottom-56 right-24"
          src={heart}
          draggable="false"
        />
        <Image
          alt="heart"
          className="absolute -rotate-45 w-20 h-20 bottom-20 right-10"
          src={heart}
          draggable="false"
        />
        <Image
          alt="heart"
          className="absolute rotate-45 w-20 h-20 -bottom-10 right-24"
          src={heart}
          draggable="false"
        />
      </div>
    </>
  );
}
