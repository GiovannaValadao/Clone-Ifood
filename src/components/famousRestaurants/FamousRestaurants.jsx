import Mc from "../../static/images/mc.jpg";
import Big from "../../static/images/big.jpg";
import Torta from "../../static/images/torta.jpg";
import Cookie from "../../static/images/cookie.jpg";
import AlphaFrut from "../../static/images/alpha-frut.jpg";
import AlphaPoint from "../../static/images/alpha-point.jpg";
import KiFominha from "../../static/images/ki-fominha.jpg";
import BK from "../../static/images/bk.jpg";
import Premiata from "../../static/images/premiatta.jpg";
import Rancho from "../../static/images/rancho.jpg";
import Drogasil from "../../static/images/drogasil.jpg";
import General from "../../static/images/general.jpg";

import "./famousRestaurants.css";

function FamousRestaurants() {
  return (
    <div class="famous-restaurants">
      <span class="famous-restaurants__title-name">
        {" "}
        <strong> Últimas lojas</strong>
      </span>

      <div class="famous-restaurants__container">
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={Mc}
            alt="Logo McDonalds"
          />
          <span class="famous-restaurants__container-content-name">
            Mcdonald's
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={Big}
            alt="Logo Big"
          />
          <span class="famous-restaurants__container-content-name">
            Mercado Big
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={Torta}
            alt="Logo Big"
          />
          <span class="famous-restaurants__container-content-name">
            Torta da Maria
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={Cookie}
            alt="Logo Big"
          />
          <span class="famous-restaurants__container-content-name">
            Mr. Cheney
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={AlphaFrut}
            alt="Logo Alpha Frut"
          />
          <span class="famous-restaurants__container-content-name">
            Alpha Frut
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={AlphaPoint}
            alt="Logo Alpha Point"
          />
          <span class="famous-restaurants__container-content-name">
            Alpha Point
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={KiFominha}
            alt="Logo Ki Fominha"
          />
          <span class="famous-restaurants__container-content-name">
            Ki Fominha
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={BK}
            alt="Logo Burguer King"
          />
          <span class="famous-restaurants__container-content-name">
            Burguer King
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={Premiata}
            alt="Logo Premiata"
          />
          <span class="famous-restaurants__container-content-name">
            Premiata Pizza
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={Rancho}
            alt="Logo Rancho"
          />
          <span class="famous-restaurants__container-content-name">
            Rancho 26
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={Drogasil}
            alt="Logo drogasil"
          />
          <span class="famous-restaurants__container-content-name">
            Drogasil
          </span>
        </div>
        <div class="famous-restaurants__container-content">
          <img
            class="famous-restaurants__container-content-image"
            src={General}
            alt="Logo General"
          />
          <span class="famous-restaurants__container-content-name">
            General
          </span>
        </div>
      </div>
    </div>
  );
}

export default FamousRestaurants;
