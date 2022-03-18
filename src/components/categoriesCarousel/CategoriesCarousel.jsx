import "./categoriesCarousel.css";
import Groceries from "../../static/images/groceries.jpg";
import Acai from "../../static/images/acai.png";
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
import Gourmet from "../../static/images/gourmet.png";

function CategoriesCarousel() {
  return (
    <div class="categories-carousel">
      <div class="categories-carousel__container">
        <ul class="categories-carousel__container-list">
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Groceries}
              alt="Ilustração de Mercado"
            />
            <p>Mercado</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Acai}
              alt="Ilustração de Açaí"
            />
            <p>Açaí</p>
          </li>{" "}
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Promotions}
              alt="Ilustração de Promoção"
            />
            <p>Promoções</p>
          </li>{" "}
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Gourmet}
              alt="Ilustração de comida gourmet"
            />
            <p>Gourmet</p>
          </li>{" "}
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Snacks}
              alt="Ilustração de Lanches"
            />
            <p>Lanches</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Salted}
              alt="Ilustração de Salgados"
            />
            <p>Salgados</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={IceCream}
              alt="Ilustração de sorvete"
            />
            <p>Sorvetes</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Japan}
              alt="Ilustração de comida japonesa"
            />
            <p>Japonesa</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Pizza}
              alt="Ilustração de pizza"
            />
            <p>Pizza</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Bakery}
              alt="Ilustração de Pães"
            />
            <p>Padaria</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Italian}
              alt="Ilustração de comida italiana"
            />
            <p>Italiana</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Brazilian}
              alt="Ilustração de comida brasileira"
            />
            <p>Brasileira</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Healthy}
              alt="Ilustração de comida saúdavel"
            />
            <p>Saudável</p>
          </li>
          <li>
            <img
              className="categories-carousel__container-list-image"
              src={Chinese}
              alt="Ilustração de comida chinesa"
            />
            <p>Chinesa</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CategoriesCarousel;
