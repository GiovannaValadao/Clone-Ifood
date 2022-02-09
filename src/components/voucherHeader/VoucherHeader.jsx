import "./voucherHeader.css";
import IconVoucher from "../../static/images/icon-voucher-header.svg";
import IconDown from "../../static/images/icon-down.svg";

function VoucherHeader() {
  return (
    <div className="voucher-header">
      <div class="voucher-header__container">
        <span class="voucher-icon">
          <img src={IconVoucher} alt="voucher-image" />
        </span>
        <span class="voucher-title">
          Você tem 17 cupons! Aproveite seus descontos
        </span>
        <span class="down-icon">
          <img src={IconDown} alt="down-image" />
        </span>
      </div>
    </div>
  );
}
export default VoucherHeader;
