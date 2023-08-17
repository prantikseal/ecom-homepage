import "./styles/BrandSection.scss"

const BrandSection = () => {
  const Brands = [
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
    <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 my-10 ">
      <h2 className="text-3xl font-bold text-9 my-10 text-center">
        Brand
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {
          Brands.map((brand) => (
            <div className="brand-card mx-0 relative" key={brand.id} href="#">
              <img src={brand.image} alt="brand" className=" opacity-60 " />
              <div className="brand-card-content absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center hover:z-10">
                <h1 className="brand-card-header font-semibold">{brand.category}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div> 
  )
}

export default BrandSection