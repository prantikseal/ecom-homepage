import React from 'react'

const MarketingBanner = () => {
  return (
    <div className='w-full relative my-10'>
        <div className='absolute top-0 left-0 h-full  flex flex-col justify-center ml-6 md:ml-20 lg:ml-40 xl:ml-60 2xl:ml-80'>
            <h2 className='text-2xl lg:text-5xl leading-5  text-black font-semibold '>
                New 
                <span className='text-violet-600'> Season</span>
            </h2>
            <br />
            <h2 className='text-2xl lg:text-5xl leading-5  text-black font-semibold '>
                Clothes Collection
            </h2>
            <div className="mt-6">
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
        <picture>
            <source media="(min-width: 768px)" srcSet="banner-section-img-desktop.png" />
            <source media="(min-width: 400px)" srcSet="banner-section-img-mobile.png" />
            <img src="banner-section-img-mobile.png" alt="" className='w-full'/>
        </picture>
    </div>
  )
}

export default MarketingBanner