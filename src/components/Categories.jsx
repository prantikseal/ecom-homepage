import "./styles/Categories.scss";

const Categories = () => {
  const categories = [
    {
      id: 0,
      category: "Men",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 1,
      category: "Women",
      image: "https://picsum.photos/300/400",
    },
    {
      id: 2,
      category: "Kids",
      image: "https://picsum.photos/300/400",
    },
  ];
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 my-6">
      <div className="flex flex-wrap justify-center items-center">
        {categories.map((category) => (
          <div className="category-card mx-0 my-4 md:mx-7" key={category.id} href="#">
            <img src={category.image} alt="category" className="rounded-lg" />
            <div className="category-card-content">
              <h1 className="category-card-header font-semibold text-white text-2xl">{category.category}</h1>
              <a className="category-card-cta" href="#">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
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
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
