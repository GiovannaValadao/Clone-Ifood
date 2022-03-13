import HomeHeader from "./components/header/HomeHeader.jsx";
import HomeHeaderMobile from "./components/headerMobile/HomeHeaderMobile.jsx";
import VoucherHeader from "./components/voucherHeader/VoucherHeader.jsx";
import VoucherHeaderMobile from "./components/voucherHeaderMobile/VoucherHeaderMobile.jsx";
import Filter from "./components/filter/Filter.jsx";

import "./styles/global.css";
import CarouselCategories from "./components/carouselCategories/CarouselCategories.jsx";

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <HomeHeaderMobile />
      <VoucherHeader />
      <VoucherHeaderMobile />
      <Filter />
      <CarouselCategories />
    </div>
  );
}
export default App;
