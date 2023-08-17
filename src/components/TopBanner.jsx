const TopBanner = () => {
  return (
    <div className="bg-violet-600 hidden sm:block">
      <div className="top-banner p-2 w-full text-white text-sm mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <p>Support (30) 333 477 7720</p>
          <p className="hidden md:block">
            Free Shipping on Orders 100+
            <a href="#" className="underline mx-2">
              Learn More
            </a>
          </p>
          <ul className="flex">
            <li className="mx-2"> <a href="#">Shipping</a></li>
            <li className="mx-2"> <a href="#">FAQ</a></li>
            <li className="mx-2"> <a href="#">Contact</a></li>
            <li className="flex mx-2 content-center">
              Eng | $
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-badge-down-filled"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="#ffffff"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z"
                  fill="currentColor"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
