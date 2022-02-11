import "./voucherHeaderMobile.css";
import IconVoucherMobile from "../../static/images/icon-voucher-available.svg";
import IconUp from "../../static/images/icon-up.svg";

function VoucherHeaderMobile() {
  return (
    <div className="voucher-header-mobile">
      <div class="voucher-header-mobile__container">
        <span class="icon-voucher-mobile">
          <img
            src={IconVoucherMobile}
            alt="voucher-mobile-image"
            width="34px"
            height="34px"
          />
        </span>
        <div class="voucher-header-mobile__text">
          <h4 class="voucher-header-mobile__text-title">Você tem 10 cupons!</h4>
          <span class="voucher-header-mobile__text-description">
            Aproveite seus descontos
          </span>
        </div>
        <div class="voucher-header-mobile__icon">
          <span class="voucher-header-mobile__icon-up">
            <img src={IconUp} />
          </span>
        </div>
      </div>
    </div>
  );
}
export default VoucherHeaderMobile;
