import react from "react";
import w1 from "../images/watches/wa1.png";
import w2 from "../images/watches/wa2.png";
import w3 from "../images/watches/wa3.png";
import w4 from "../images/watches/wa4.png";
import w5 from "../images/watches/wa5.png";
import w6 from "../images/watches/wa6.png";
import w7 from "../images/watches/wa7.png";
import w8 from "../images/watches/wa8.png";
import w9 from "../images/watches/wa9.png";
import s1 from "../images/watches/sh1.png";
import s2 from "../images/watches/sh2.png";
import s3 from "../images/watches/sh3.png";
import s4 from "../images/watches/sh4.png";
import s5 from "../images/watches/sh5.png";
import s6 from "../images/watches/sh6.png";
import s7 from "../images/watches/sh7.png";
import s8 from "../images/watches/sh8.png";
import s9 from "../images/watches/sh9.png";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import styles from "./styles.css";

let x = 0;

export function Images() {
  const [toggleState, setToggleState] = react.useState(1);

  function toggleTab(index) {
    setToggleState(index);
    console.log(index);
  }

  const [arr, setArr] = react.useState([
    [w1, w2, w3],
    [w4, w5, w6],
    [w7, w8, w9],
  ]);

  function rolex() {
    return setArr([
      [w1, w2, w3],
      [w4, w5, w6],
      [w7, w8, w9],
    ]);
  }
  function patek() {
    return setArr([
      [s1, s2, s3],
      [s4, s5, s6],
      [s7, s8, s9],
    ]);
  }

  function add() {
    setArr((prevState) => {
      return [...prevState];
    });
    console.log(arr[x]);
    while (x < arr.length - 1) {
      x++;
    }
  }
  console.log(x);

  function sub() {
    setArr((prevState) => {
      return [...prevState];
    });
    console.log(arr[x]);
    while (x > 0) {
      x--;
    }
  }

  return (
    <div className="images-con">
      <p>new arrivals.</p>
      <div className="tabs-con">
        <div
          className={toggleState === 1 ? "active-tab" : " tab"}
          onClick={() => {
            toggleTab(1);
            rolex();
          }}
        >
          <p className="item">WATCHES</p>
        </div>
        <div
          className={toggleState === 2 ? "active-tab" : " tab"}
          onClick={() => {
            toggleTab(2);
            patek();
          }}
        >
          <p className="item">SHADES</p>
        </div>
      </div>
      <div className="imgArray-con">
        <div>
          <FaAngleLeft className="arrow" onClick={sub}></FaAngleLeft>
        </div>
        <div className="img-arr">
          {arr.map((item) => (
            <img src={item[x]} />
          ))}
        </div>
        <div className="mobile-img">
          <p className="active-tab">WATCHES</p>
          <img src={w1} />
          <div className="see-more-con">
            <p className="see-more">see more</p>
          </div>
        </div>
        <div className="mobile-img">
          <p className="active-tab">SHADES</p>
          <img src={s1} />
          <div className="see-more-con">
            <p className="see-more">see more</p>
          </div>
        </div>

        <div>
          <FaAngleRight className="arrow" onClick={add}></FaAngleRight>
        </div>
      </div>

      <div className="see-more-con-xl">
        <p className="see-more">see more</p>
      </div>
    </div>
  );
}
