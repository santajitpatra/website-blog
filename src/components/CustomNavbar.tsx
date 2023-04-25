import Link from "next/link"

const Navbar = (props: any) => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between p-5">
          <Link href="/" className="text-green-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-green-500 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>   Go To Website
          </Link>
          <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-green-500">
            <h1 className="font-bold text-white">
              Want Coding challenges & Solutions sent to your inbox daily?
            </h1>
            <Link
              href="https://santajitpatra.netlify.app/"
              className="text-green-500 font-bold ml-2"
            >
              santajitpatra.netlify.app
            </Link>
          </div>
        </div>
        <>{props.renderDefault(props)}</>
      </div>
    </div>
  )
}

export default Navbar
