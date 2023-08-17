import NavBar from "./NavBar";
import "./styles/HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <NavBar />
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="mt-10">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            New Season
          </h1>
          <p className="mt-4 text-white font-medium">
            Check out the latest designs from our community of <br />{" "}
            independent designers.
          </p>

          <div className="mt-10">
            <button className="bg-violet-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-violet-600 ease-in-out transition-all flex justify-center content-center">
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FFF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
