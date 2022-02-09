import HomeHeader from "./components/header/HomeHeader.jsx";
import HomeHeaderMobile from "./components/headerMobile/HomeHeaderMobile.jsx";
import VoucherHeader from "./components/voucherHeader/VoucherHeader.jsx";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <HomeHeaderMobile />
      <VoucherHeader />
    </div>
  );
}
export default App;
