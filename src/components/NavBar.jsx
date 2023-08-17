

function Navbar() {
  return (
    <nav className="bg-transparent ">
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          <div className="flex items-center sm:items-stretch sm:justify-start hover:cursor-pointer hover:text-white">
            <a
              className="flex flex-shrink-0 items-center text-2xl font-bold"
              href="/"
            >
              Logo
            </a>
          </div>

          
          <div className="hidden sm:ml-6 md:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black-300 hover:text-white px-1 py-2 rounded-md text-md font-medium"
              >
                New
              </a>
              <a
                href="#"
                className="text-black-300 hover:text-white px-1 py-2 rounded-md text-md font-medium"
              >
                Tops
              </a>
              <a
                href="#"
                className="text-black-300 hover:text-white px-1 py-2 rounded-md text-md font-medium"
              >
                Bottoms
              </a>
              <a
                href="#"
                className="text-black-300 hover:text-white px-1 py-2 rounded-md text-md font-medium"
              >
                Kids
              </a>
              <a
                href="#"
                className="text-black-300 hover:text-white px-1 py-2 rounded-md text-md font-medium"
              >
                Accessories
              </a>
              <a
                href="#"
                className="text-black-300 hover:text-white px-1 py-2 rounded-md text-md font-medium"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-black-300 hover:text-white px-1 py-2 rounded-md text-md font-medium"
              >
                Sale
              </a>

              
            </div>
          </div>

          
          <div className="absolute right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            

            <button className="text-black-300 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler hover:stroke-white icon-tabler-search"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="#000000"
                stroke-width="2"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </button>

            <button className="text-black-300 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler hover:stroke-white icon-tabler-shopping-cart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="#000000"
                stroke-width="2"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </button>
            <button className="text-black-300 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler hover:stroke-white icon-tabler-user-circle"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="#000000"
                stroke-width="2"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
