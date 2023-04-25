import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/img.jpeg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The PAPAFAM</h1>
      </div>
      <div>
        <Link
          href="santajitpatra.netlify.app"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-green-500 flex items-center rounded-full text-center"
        >
          Sign up to the University of Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
