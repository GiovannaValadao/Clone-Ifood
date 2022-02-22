import ArrowDownCurrentColor from "../../static/images/arrow-down-current-color.svg";
import Takeout from "../../static/images/takeout.svg";
import FilterImage from "../../static/images/filter.svg";

import "./filter.css";

function Filter() {
  return (
    <div class="filter-container">
      <ul class="filter-container__list">
        <li class="filter-container__list-item">
          <span class="filter-container__list-text">Ordenar</span>
          <span class="image">
            <img src={ArrowDownCurrentColor} />
          </span>
        </li>
        <li class="filter-container__list-item">
          <span class="image">
            <img src={Takeout} />
          </span>
          <span class="filter-container__list-text">Pra retirar</span>
        </li>
        <li class="filter-container__list-item">
          <span class="filter-container__list-text">Entrega grátis</span>
        </li>
        <li class="filter-container__list-item">
          <span class="filter-container__list-text">Vale-refeição</span>
          <span class="image">
            <img src={ArrowDownCurrentColor} />
          </span>
        </li>
        <li class="filter-container__list-item">
          <span class="filter-container__list-text">Distância</span>
          <span class="filter-container__image">
            <img src={ArrowDownCurrentColor} />
          </span>
        </li>
        <li class="filter-container__list-item">
          <span class="filter-container__list-text">Entrega Parceira</span>
        </li>
        <li class="filter-container__list-item">
          <span class="filter-container__list-text">Super Restaurantes</span>
        </li>
        <li class="filter-container__list-item">
          <span class="filter-container__list-text">Filtros</span>
          <span class="image">
            <img src={FilterImage} />
          </span>
        </li>
        <li class="filter-container__list-item">
          <span class="filter-container__list-text">Limpar</span>
        </li>
      </ul>
    </div>
  );
}
export default Filter;
