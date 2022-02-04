import HomeHeader from "./components/header/HomeHeader.jsx";
import HomeHeaderMobile from "./components/headerMobile/HomeHeaderMobile.jsx";

import "./styles/global.css";
function App() {
  return (
    <div className="App">
      <HomeHeader />
      <HomeHeaderMobile />
    </div>
  );
}
export default App;
