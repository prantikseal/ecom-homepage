

const LogoSection = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
      <div className="flex justify-evenly flex-wrap m-10 ">
        <img src="adidas-logo.png" alt="" className="mx-2 w-32 filter grayscale h-auto" />  
        <img src="puma-logo.jpg" alt="" className="mx-2 w-32 filter grayscale" /> 
        <img src="lacoste-logo.png" alt="" className="mx-2 w-32 filter grayscale" /> 
      </div>
    </div>
  );
};

export default LogoSection;
