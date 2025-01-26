import Image from "next/image";
import business from "../assets/business.png";
import dater from "../assets/dater.png";
import heart from "../assets/heart.png";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <nav className="flex items-center justify-between p-5 h-16 bg-primary">
        <div className="flex gap-5 items-center">
          <Link
            className="text-3xl  font-bold text-stone-50 hover:text-blue-600"
            href="/"
          >
            Plan-It
          </Link>
        </div>
      </nav>

      <div className="w-full flex flex-col gap-16 items-center relative">
        <p className="pt-24 text-primary text-4xl font-bold">
          How do you want to use Plan-It?
        </p>

        <div className="w-2/3 flex justify-between">
          <section className="flex items-center flex-col">
            <Image
              alt="dater"
              src={dater}
              width={400}
              height={400}
              className="w-96 h-80 transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer"
            />
            <p className="text-primary pt-5 text-4xl font-bold">I am a dater</p>
          </section>

          <section className="flex items-center flex-col">
            <Image
              alt="dater"
              src={business}
              width={400}
              height={400}
              className="w-96 h-80 transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer"
            />
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
