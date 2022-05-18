import HomeHeader from "./components/header/HomeHeader.jsx";
import HomeHeaderMobile from "./components/headerMobile/HomeHeaderMobile.jsx";
import VoucherHeader from "./components/voucherHeader/VoucherHeader.jsx";
import VoucherHeaderMobile from "./components/voucherHeaderMobile/VoucherHeaderMobile.jsx";
import Filter from "./components/filter/Filter.jsx";
import CategoriesCarousel from "./components/categoriesCarousel/CategoriesCarousel.jsx";
import BannerCardstack from "./components/bannerCardstack/BannerCardstack.jsx";
import FamousRestaurants from "./components/famousRestaurants/FamousRestaurants.jsx";

import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <HomeHeaderMobile />
      <VoucherHeader />
      <VoucherHeaderMobile />
      <Filter />
      <CategoriesCarousel />
      <BannerCardstack />
      <FamousRestaurants />
    </div>
  );
}
export default App;
