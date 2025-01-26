import Link from "next/link";

export default function simpleNav() {
  return (
    <>
      <nav className="flex items-center justify-between p-5 h-16 bg-primary">
        <div className="flex gap-5 items-center">
          <Link
            className="text-xl  font-bold text-stone-50 hover:text-blue-600"
            href="/"
          >
            Plan-It
          </Link>
        </div>
      </nav>
    </>
  );
}
