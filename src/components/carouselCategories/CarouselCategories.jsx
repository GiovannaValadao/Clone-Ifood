import "./carosselCategories.css";
import Groceries from "../../static/images/groceries.jpg";
import Acai from "../../static/images/acai.png";
import SweetAndCakes from "../../static/images/sweetsandcakes.png";
import Promotions from "../../static/images/promotions.png";
import Snacks from "../../static/images/snacks.png";
import Salted from "../../static/images/salted.png";
import IceCream from "../../static/images/ice-cream.png";
import Japan from "../../static/images/japan.png";
import Pizza from "../../static/images/pizza.png";
import Bakery from "../../static/images/bakery.png";
import Italian from "../../static/images/italian.png";
import Brazilian from "../../static/images/brazilian.png";
import Healthy from "../../static/images/healthy.jpg";
import Chinese from "../../static/images/chinese.jpg";

function CarouselCategories() {
  return (
    <div class="carousel-categories">
      <div class="carousel-categories__container">
        <ul class="carousel-categories__container-list">
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Groceries}
            />
            <p>Mercado</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Acai}
            />
            <p>Açaí</p>
          </li>{" "}
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={SweetAndCakes}
            />
            <p>Doces & Bolos</p>
          </li>{" "}
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Promotions}
            />
            <p>Promoções</p>
          </li>{" "}
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Snacks}
            />
            <p>Lanches</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Salted}
            />
            <p>Salgados</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={IceCream}
            />
            <p>Sorvetes</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Japan}
            />
            <p>Japonesa</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Pizza}
            />
            <p>Pizza</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Bakery}
            />
            <p>Padaria</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Italian}
            />
            <p>Italiana</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Brazilian}
            />
            <p>Brasileira</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Healthy}
            />
            <p>Saudável</p>
          </li>
          <li>
            <img
              className="carousel-categories__container-list-image"
              src={Chinese}
            />
            <p>Chinesa</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CarouselCategories;
