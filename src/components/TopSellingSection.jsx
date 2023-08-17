import React from "react";

const TopSellingSection = () => {
  const products = [
    {
      id: 0,
      name: "Woman in Red Coat",
      price: 100,
      image: "brand-img-1.jpg",
      offer: true,
    },
    {
      id: 1,
      name: "Woman in Red Coat",
      price: 200,
      image: "brand-img-2.webp",
      offer: false,
    },
    {
      id: 2,
      name: "Woman in Red Coat",
      price: 300,
      image: "brand-img-3.jpg",
      offer: true,
    },
    {
      id: 3,
      name: "Woman in Red Coat",
      price: 400,
      image: "brand-img-4.jpg",
      offer: false,
    },
    {
      id: 4,
      name: "Woman in Red Coat",
      price: 500,
      image: "brand-img-5.png",
      offer: true,
    },
    {
      id: 5,
      name: "Woman in Red Coat",
      price: 600,
      image: "brand-img-6.png",
      offer: false,
    },
    {
      id: 6,
      name: "Woman in Red Coat",
      price: 700,
      image: "brand-img-7.jpg",
      offer: true,
    },
    {
      id: 7,
      name: "Woman in Red Coat",
      price: 800,
      image: "brand-img-8.jpg",
      offer: false,
    },
  ];
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 my-10 border-t-2 border-b-2">
      <div className="text-center">
        <h2 className="text-md font-semibold text-violet-600 my-6 uppercase">
          Top Selling
        </h2>
        <h2 className="new-arrivals-heading text-4xl text-black font-semibold text-center my-8">
          Best Weekend Sellers
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {products.map((product) => (
          <div className="product-card relative" key={product.id}>
            <div className="product-card-details text-center absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full opacity-0 hover:opacity-100 transition-all duration-300 z-10">
              <div className="product-card-actions">
                <button className="product-card-btn bg-violet-600 text-white px-4 py-2 rounded-md  hover:bg-violet-500 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-shopping-cart-plus"
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
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                  </svg>
                </button>
                <button className="product-card-btn bg-red-400 text-black ml-2 px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart-plus"
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
                    <path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8 6" />
                    <path d="M14 16h6" />
                    <path d="M17 13v6" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-card-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card-details text-center">
              <h3 className="product-card-name">{product.name}</h3>
              <p className="product-card-price text-violet-600 font-semibold">
                $ {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingSection;
