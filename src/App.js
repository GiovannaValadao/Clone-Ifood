import HomeHeader from "./components/header/HomeHeader.jsx";
import HomeHeaderMobile from "./components/headerMobile/HomeHeaderMobile.jsx";
import VoucherHeader from "./components/voucherHeader/VoucherHeader.jsx";
import VoucherHeaderMobile from "./components/voucherHeaderMobile/VoucherHeaderMobile.jsx";
import Filter from "./components/filter/Filter.jsx";

import "./styles/global.css";
import CategoriesCarousel from "./components/categoriesCarousel/CategoriesCarousel.jsx";

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <HomeHeaderMobile />
      <VoucherHeader />
      <VoucherHeaderMobile />
      <Filter />
      <CategoriesCarousel />
    </div>
  );
}
export default App;
