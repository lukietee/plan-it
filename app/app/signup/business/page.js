import Image from "next/image";
import Link from "next/link";
import SimpleNav from "../../components/SimpleNav.jsx";

export default function SignUpBusiness() {
  return (
    <>
      <SimpleNav />

      <div className="w-full min-h-96 outline flex flex-col gap-16 items-center relative">
        <div className="w-5/6 min-h-40 bg-primary flex flex-col"></div>
      </div>
    </>
  );
}
