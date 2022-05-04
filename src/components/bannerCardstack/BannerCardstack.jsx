import All from "../../static/images/all.png";
import Good from "../../static/images/bom&barato.png";
import FreeDelivery from "../../static/images/free-delivery.png";
import Pear from "../../static/images/pear.png";
import Barbecue from "../../static/images/barbecue.png";
import TwoForOne from "../../static/images/2x1.png";
import Gourmet from "../../static/images/gourmet-veja.png";

import "./bannerCardstack.css";

function BannerCardstack() {
  return (
    <div class="banner-cardstack__container">
      <ul class="banner-cardstack__container-list">
        <li class="banner-cardstack__container-list-item">
          {" "}
          <img
            className="banner-cardstack__container-list-item-image"
            src={All}
            alt="Ilustração de Mercado"
            width="392px"
            height="183px"
          />
        </li>
        <li class="banner-cardstack__container-list-item">
          {" "}
          <img
            className="banner-cardstack__container-list-item-image"
            src={FreeDelivery}
            alt="Ilustração de Mercado"
            width="392px"
            height="183px"
          />
        </li>
        <li class="banner-cardstack__container-list-item">
          {" "}
          <img
            className="banner-cardstack__container-list-item-image"
            src={Good}
            alt="Ilustração de Mercado"
            width="392px"
            height="183px"
          />
        </li>
        <li class="banner-cardstack__container-list-item">
          {" "}
          <img
            className="banner-cardstack__container-list-item-image"
            src={Pear}
            alt="Ilustração de Mercado"
            width="392px"
            height="183px"
          />
        </li>
        <li class="banner-cardstack__container-list-item">
          {" "}
          <img
            className="banner-cardstack__container-list-item-image"
            src={Gourmet}
            alt="Ilustração de Mercado"
            width="392px"
            height="183px"
          />
        </li>
        <li class="banner-cardstack__container-list-item">
          {" "}
          <img
            className="banner-cardstack__container-list-item-image"
            src={TwoForOne}
            alt="Ilustração de Mercado"
            width="392px"
            height="183px"
          />
        </li>
        <li class="banner-cardstack__container-list-item">
          {" "}
          <img
            className="banner-cardstack__container-list-item-image"
            src={Barbecue}
            alt="Ilustração de Mercado"
            width="392px"
            height="183px"
          />
        </li>
      </ul>
    </div>
  );
}
export default BannerCardstack;
