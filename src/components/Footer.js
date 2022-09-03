import { FaBahai } from "react-icons/fa";

export function Footer() {
  return (
    <div className="footer">
      <div>
        <div>
          <FaBahai />

          <p>Visit us</p>
        </div>
        <p>About</p>
        <p>Sell</p>
        <p>Find</p>
        <p>Repair</p>
      </div>
      <div>
        <div>
          <FaBahai />
          <p>Payment method</p>
        </div>

        <p>Returns</p>
        <p>Terms</p>
        <p>Policy</p>
      </div>
      <div>
        <div>
          <FaBahai />
          <p>Shop</p>
        </div>
        <p>Watches</p>
        <p>Jewellery</p>
        <p>Services</p>
        <p>Sell</p>
      </div>
      <div className="footer-banner">
        <p>WATCH SHOP</p>
        <p>LONDON</p>
      </div>
    </div>
  );
}
