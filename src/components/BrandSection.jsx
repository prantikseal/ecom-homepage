import "./styles/BrandSection.scss"

const BrandSection = () => {
  const Brands = [
    {
      id: 0,
      category: "Brand",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 1,
      category: "Brand",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 2,
      category: "Brand",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 3,
      category: "Brand",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 4,
      category: "Brand",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 5,
      category: "Brand",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 6,
      category: "Brand",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 7,
      category: "Brand",
      image: "https://picsum.photos/300/400",
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
              <div className="brand-card-content absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10">
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