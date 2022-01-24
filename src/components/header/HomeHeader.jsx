import "./homeHeader.css";
import Logo from "./static/images/logo.jpg";
import Restaurant from "./static/images/restaurant.png";
import ArrowDown from "./static/images/arrow-down.svg";
import Search from "./static/images/search.svg";
import Pin from "./static/images/pin-o.svg";
import Promotion from "./static/images/promotion.svg";
import User from "./static/images/user.svg";
import Bag from "./static/images/bag.svg";

function HomeHeader() {
  return (
    <header className="home_header">
      <nav class="home-header__container">
        <div class="home-header__logo">
          <img src={Logo} width="100" height="100" />
        </div>
        <section class="categories">
          <div class="categories__restaurant">
            <img src={Restaurant} width="40" height="40" />
          </div>
          <div class="categories_title">
            <span>Restaurante</span>
          </div>
          <div class="categories-arrow">
            <span class="arrow-down">
              <img src={ArrowDown} />
            </span>
          </div>
        </section>
        <section class="search-container">
          <form class="search-input__form">
            <div class="search-input__form-wrapper">
              <img src={Search} class="search_image" />
              <input
                class="search-input-field"
                tabindex="0"
                role="search"
                type="text"
                autocomplete="off"
                aria-label="Busque por item ou loja"
                placeholder="Busque por item ou loja"
              />
            </div>
          </form>
        </section>
        <section class="delivery_input-wrapper">
          <div class="delivery-input-wrapper__title">
            <span>Entregar em</span>
          </div>
          <div class="delivery-input">
            <img
              src={Pin}
              width="15"
              height="15"
              class="delivery-input__address"
            />
            <span class="delivery-address_item">R.Sol, 1233</span>
            <img src={ArrowDown} />
          </div>
        </section>
        <section class="icons-links">
          <span class="icon-promotional">
            <img src={Promotion} />
          </span>
          <span class="user">
            <img src={User} />
          </span>
          <span class="bag_image">
            <img src={Bag} />
          </span>
        </section>
      </nav>
    </header>
  );
}
export default HomeHeader;
