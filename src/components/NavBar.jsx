import React, { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const searchBar = () => {
    setSearch(search);
  }

  return (
    <nav className="bg-transparent transition duration-500 ease-in-out ">
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
            

            <button className="text-black-300 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer" onClick={() => {
              setSearch(!search);
            }}>
              {
                search ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler hover:stroke-white icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke="#000000" stroke-width="2" fill="none">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler hover:stroke-white icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke="#000000" stroke-width="2" fill="none">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                )

              }
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
      {
              search ? (
                <div className="flex flex-col items-center justify-center">
                  <input type="text" placeholder="Search" className="border-2 border-gray-300 rounded-md px-2 py-1 w-1/2" />
                  <button className="text-black-300 px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer" onClick={() => { setSearch(!search) }
                  }>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler hover:stroke-white icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke="#000000" stroke-width="2" fill="none">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div></div>
              )
      }
    </nav>
  );
}

export default Navbar;
