import AddressIcon from "../../static/images/address-modal-icon.svg";
import Search from "../../static/images/search.svg";

import "./modal.css";

const Modal = ({ show, toggleModal }) => {
  const showRideModal = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showRideModal}>
      <div className="modal-content">
        <button
          className="modal-content__button"
          type="button"
          onClick={toggleModal}
        >
          <span className="modal-content__button-icon">x</span>
        </button>
        <div class="modal-content__icon">
          <img src={AddressIcon} alt="icone de endereço" />

          <span className="modal-content__title">
            Onde você quer receber seu pedido?
          </span>
          <section className="modal-content-input">
            <form class="modal-content-input__form">
              <div class="modal-content-input__form-wrapper">
                <img src={Search} class="search_image" alt="imagem de lupa" />
                <input
                  class="modal-content-input-field"
                  tabindex="0"
                  role="search"
                  type="text"
                  autocomplete="off"
                  aria-label="Buscar endereço e número"
                  placeholder="Buscar endereço e número"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Modal;
