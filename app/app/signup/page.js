import Image from "next/image";
import business from "../assets/business.png";
import dater from "../assets/dater.png";

export default function SignUp() {
  return (
    <>
      <nav className="flex items-center justify-between p-5 h-16 bg-primary">
        <div className="flex gap-5 items-center">
          <a
            href="#"
            className="text-xl font-bold text-stone-50 hover:text-blue-600"
          >
            Plan-It
          </a>
        </div>
      </nav>

      <div className="w-full flex flex-col gap-16 items-center">
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
      </div>
    </>
  );
}
