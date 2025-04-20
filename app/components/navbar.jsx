import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/">
            <a className="text-[#16f2b3] text-3xl font-bold">Tanish Sharma</a>
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link href="/#about">
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  ABOUT
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#experience">
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  EXPERIENCE
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#skills">
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  SKILLS
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#education">
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  EDUCATION
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  BLOGS
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  PROJECTS
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;