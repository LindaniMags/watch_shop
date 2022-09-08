import Maskgroup from "../images/Mask group.png";
import search from "../images/Group 149.png";
import phone from "../images/phone 1.png";
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import React from "react";
export function TopSec() {
  const [active, setActive] = React.useState(false);

  function menu() {
    setActive((prevState) => !prevState);
  }

  return (
    <div>
      <div className="header-con">
        <div className="cell-con">
          <img src={phone} className="icon" alt="cell" />
          <p>+268 7612 3456</p>
        </div>
        <div className="b-menu">
          <TiThMenuOutline className="menu-icon" onClick={menu} />
        </div>
        <div className="title-con">
          <p className="title">WATCH SHOP</p>
          <p>BEE</p>
        </div>
        <div className="icon-con">
          <img src={search} className="icon" alt="icon" />
          <input placeholder="search" className="search" />
        </div>
      </div>
      <div className="nav-con">
        <ul className="nav-list">
          <li>
            <a href="google.com">WATCHES</a>
          </li>
          <li>
            <a href="google.com">JEWELLERY</a>
          </li>
          <li>
            <a href="google.com">SERVICES</a>
          </li>
          <li>
            <a href="google.com">SELL YOUR WATCH</a>
          </li>
          <li>
            <a href="google.com">VISIT US</a>
          </li>
        </ul>
      </div>
      <div className={active ? "menu-icon-active" : "menu-icon-inactive"}>
        <ul className="nav-list-active">
          <li>
            <a href="google.com">WATCHES</a>
          </li>
          <li>
            <a href="google.com">JEWELLERY</a>
          </li>
          <li>
            <a href="google.com">SERVICES</a>
          </li>
          <li>
            <a href="google.com">SELL YOUR WATCH</a>
          </li>
          <li>
            <a href="google.com">VISIT US</a>
          </li>
        </ul>
      </div>
      <div className="hero">
        <div className="headline">
          <p>use this headline space wisely</p>
          <button className="takeMe-btn">TAKE ME THERE</button>
        </div>
      </div>
    </div>
  );
}
