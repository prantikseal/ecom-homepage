import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import HeroSection from './components/HeroSection'
import LogoSection from './components/LogoSection'
import NewArrivals from './components/NewArrivals'
import TopBanner from './components/TopBanner'
import BrandSection from "./components/BrandSection";
import MarketingBanner from "./components/MarketingBanner";
import TopSellingSection from "./components/TopSellingSection";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <TopBanner />
      <HeroSection />
      <LogoSection  />
      <NewArrivals />
      <Categories />
      <MarketingBanner />
      <TopSellingSection />
      <BrandSection />
      <Footer />
    </>
  )
}

export default App
