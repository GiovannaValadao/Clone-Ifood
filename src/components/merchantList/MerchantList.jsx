import "./merchantList.css";
import Rancho from "../../static/images/rancho.jpg";
import AlphaPoint from "../../static/images/alpha-point.jpg";
import AlphaFrut from "../../static/images/alpha-frut.jpg";
import BK from "../../static/images/bk.jpg";
import KiFominha from "../../static/images/ki-fominha.jpg";
import General from "../../static/images/general.jpg";
import MC from "../../static/images/mc.jpg";
import Premiatta from "../../static/images/premiatta.jpg";
import Torta from "../../static/images/torta.jpg";
import Drogasil from "../../static/images/drogasil.jpg";
import Big from "../../static/images/big.jpg";
import Cookie from "../../static/images/cookie.jpg";
import Divino from "../../static/images/divino.jpg";
import Yell from "../../static/images/yell.jpg";
import Bolo from "../../static/images/bolo.jpg";
import Cafe from "../../static/images/cafe.jpg";
import TacoBell from "../../static/images/taco-bell.jpg";
import CacauShow from "../../static/images/cacau-show.jpg";
import Omotenashi from "../../static/images/sushi.jpg";
import CoxinhaBox from "../../static/images/box.jpg";
import Star from "../../static/images/star-o.svg";

function MerchantList() {
  return (
    <div className="merchant">
      <h2 className="merchant-title">Lojas</h2>
      <div className="merchant-list">
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Rancho}
              alt="Logo Rancho"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Rancho 26</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Lanches{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={AlphaPoint}
              alt="Logo Alpha Point"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Alpha Point</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Lanches{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 3,99
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={AlphaFrut}
              alt="Logo alpha frut"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">AlphaFrut</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Lanches{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={BK}
              alt="Logo BK"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Burguer King</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Lanches{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={KiFominha}
              alt="Logo KiFominha"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">KiFominha</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Brasileira{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                9.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={General}
              alt="Logo general"
            />
          </div>
          <div className="merchant-list__content--info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">General</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Lanches{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={MC}
              alt="Logo MC"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Mcdonald's</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Lanches{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                1.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  Grátis
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Premiatta}
              alt="Logo premiatta"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Premiatta</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">3.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Pizzas{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                6.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 7,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Torta}
              alt="Logo torta"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">
                Torta da Maria
              </span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Tortas{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Drogasil}
              alt="Logo drogasil"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Drogasil</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.9</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Drogaria{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={CoxinhaBox}
              alt="Logo coxinha box"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Coxinha Box</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Salgados{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  32-43 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 6,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Big}
              alt="Logo big"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Mercado BIG</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">2.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Supermercado{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Cookie}
              alt="Logo Cookie"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Mr. Cheney</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Lanches{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 4,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Divino}
              alt="Logo divino fogão"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Divino Fogão</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">4.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Brasileira{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                2.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 3,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Yell}
              alt="Logo divino fogão"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Yell Burguer</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">2.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Lanches{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark"> 8 km </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 9,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Bolo}
              alt="Logo fábrica de bolo"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">
                Fábrica de bolo da Vó Alzira
              </span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">2.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Bolos & Doces{" "}
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                12 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 3,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Cafe}
              alt="Logo cafeteria"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Sterna Café</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">2.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Cafeteria
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                12 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  22-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 3,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={TacoBell}
              alt="Logo taco bell"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Taco Bell</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">2.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Mexicana
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark"> 2 km </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  44-53 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 3,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={CacauShow}
              alt="Logo cacau show"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Cacau Show</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">2.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Doces & Bolos
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                5.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  19-33 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 5,99
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-list__content">
          <div className="merchant-list__content-image">
            <img
              className="merchant-list__content-image-item"
              src={Omotenashi}
              alt="Logo Omotenashi"
            />
          </div>
          <div className="merchant-list__content-info">
            <b>
              {" "}
              <span class="merchant-list__content-info-name">Omotenashi</span>
            </b>
            <div>
              <span class="merchant-list__content-info-first-yellow">2.3</span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                Japonesa
              </span>
              <span class="merchant-list__content-info-first-dark"> • </span>
              <span class="merchant-list__content-info-first-dark">
                {" "}
                7.0 km{" "}
              </span>
              <div class="merchant-list__content-info-second">
                <span class="merchant-list__content-info-second-dark">
                  {" "}
                  49-55 min{" "}
                </span>
                <span class="merchant-list__content-info-second-dark"> • </span>
                <span class="merchant-list__content-info-second-dark">
                  R$ 7,99
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MerchantList;
