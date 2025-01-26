import Image from "next/image";
import Link from "next/link";
import SimpleNav from "../../components/SimpleNav.jsx";

export default function SignUpBusiness() {
  return (
    <>
      <SimpleNav />

      <div className="w-full min-h-96 outline flex flex-col gap-16 items-center relative">
        <div className="min-h-40 bg-primary pt-20 flex flex-col justify-center ">
          <div className="bg-secondary rounded-xl items-center w-1/2 flex flex-col gap-5">
            <p className="text-primary text-3xl font-bold text-center pt-5">
              Make Someone&apos;s night.
            </p>

            <section className="flex flex-col gap-3 w-10/12">
              <p className="rounded-xl p-2 bg-gray-200 text-black text-xl">
                Business Name
              </p>
              <p className="rounded-xl p-2 bg-gray-200 text-black text-xl">
                Business Address
              </p>
              <p className="rounded-xl p-2 bg-gray-200 text-black text-xl">
                Email Address
              </p>
              <p className="rounded-xl p-2 bg-gray-200 text-black text-xl">
                Business Phone
              </p>
              <p className="rounded-xl p-2 bg-gray-200 text-black text-xl">
                Password
              </p>
              <p className="rounded-xl p-2 bg-gray-200 text-black text-xl">
                Select Your Business Type
              </p>
            </section>

            <section>
              <p className="text-black text-xl">Budget Range</p>

              <article>
                <div>
                  <p className="text-black text-xl">$</p>
                </div>
                <div>
                  <p className="text-black text-xl">$$</p>
                </div>
                <div>
                  <p className="text-black text-xl">$$$</p>
                </div>
              </article>
            </section>

            <p className="text-black text-xl">Create Account</p>
          </div>

          <Image alt="Business" src="/#" width={1000} height={1000} />
        </div>
      </div>
    </>
  );
}
