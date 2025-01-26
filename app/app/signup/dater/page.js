import Image from "next/image";
import Link from "next/link";
import SimpleNav from "../../components/SimpleNav.jsx";

export default function SignUpDater() {
  return (
    <>
      <SimpleNav />

      <div className="w-full flex flex-col gap-16 items-center relative">
        <p className="pt-24 text-primary text-4xl font-bold">
          How do you want to use Plan-It?
        </p>
      </div>
    </>
  );
}
