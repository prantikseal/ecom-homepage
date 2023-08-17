const Footer = () => {
  return (
    <div className="bg-slate-300 p-6">
      <div className="footer mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-28">
        <div className="brand-section w-full lg:w-52">
          <h4 className="font-bold text-md mb-5">Brand</h4>
          <h3>Subscribe to our newsletter</h3>
          <div className="input-group mt-5 flex">
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-full p-2 rounded-l-md"
            />
            <button className="bg-violet-600 text-white px-2 py-2 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-google-play"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" />
                <path d="M15 9l-10.5 11.5" />
                <path d="M4.5 3.5l10.5 11.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="company-section">
          <h4 className="font-bold text-md mb-5">Company</h4>
          <ul>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">About Us</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Blog</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Careers</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Our Team</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Help Center</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Outlets</a>
            </li>
          </ul>
        </div>
        <div className="shop-section">
          <h4 className="font-bold text-md mb-5">Shop</h4>
          <ul>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Gift Card</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Our Products</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">My Account</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Shipping</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Returns</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Rewards</a>
            </li>
          </ul>
        </div>
        <div className="support-section">
          <h4 className="font-bold text-md mb-5">Support</h4>
          <ul>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Contact Us</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Payment Options</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Store Locator</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Acessibility</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Affiliates</a>
            </li>
          </ul>
        </div>
        <div className="faq-section">
          <h4 className="font-bold text-md mb-5">FAQ</h4>
          <ul>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Rewards FAQ</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Product Core</a>
            </li>
            <li className="mb-2 font-medium text-base hover:text-violet-600">
              <a href="">Size Guide</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 mt-10 flex justify-between flex-col lg:flex-row">
        <div className="right">© 2023, All Rights Reserved by Brand</div>
        <div className="left flex justify-center items-center">
          Payment Options :
          <span className="ml-2">
            <img src="paypal.svg" alt="" />
          </span>
          <span className="ml-2">
            <img src="visa.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
