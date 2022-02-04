import "./homeHeaderMobile.css";
import Restaurant from "../../static/images/restaurant.png";
import ArrowDown from "../../static/images/arrow-down.svg";
import Pin from "../../static/images/pin-o.svg";
import HomeFilled from "../../static/images/home-filled.svg";
import Explorer from "../../static/images/explorer.svg";
import Order from "../../static/images/order.svg";
import Profile from "../../static/images/profile.svg";

function HomeHeaderMobile() {
  return (
    <header className="header-mobile">
      <nav class="header-mobile__container">
        <div class="header-mobile__icon-categories">
          <img src={Restaurant} width="40" height="40" alt="category-image" />
        </div>
        <div class="input-wrapper">
          <span class="input-wrapper__title">Entregar em</span>
          <div class="address-info">
            <img src={Pin} width="15" height="15" alt="location-pin-image" />
            <span class="input_wrapper__item">R.Sol, 1233</span>
            <div class="image_icon">
              <img src={ArrowDown} alt="arrow-down-image" />
            </div>
          </div>
        </div>
      </nav>
      <div class="tab-bar">
        <div class="tab-bar__home">
          <img src={HomeFilled} alt="home-image" />
          <span class="tab-bar__text">Inicio</span>
        </div>
        <div class="tab-bar__explorer">
          <img src={Explorer} alt="explorer-image" />
          <span class="tab-bar__text">Buscar</span>
        </div>
        <div class="tab-bar__order">
          <img src={Order} alt="order-image" />
          <span class="tab-bar__text">Pedido</span>
        </div>
        <div class="tab-bar__profile">
          <span class="tab-bar__icon-profile">
            <img src={Profile} alt="profile-image" />
          </span>
          <span class="tab-bar__text">Perfil</span>
        </div>
      </div>
    </header>
  );
}
export default HomeHeaderMobile;
