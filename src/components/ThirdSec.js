import ad1 from "../images/Rectangle 24.png";
import ad2 from "../images/image 21.png";

export function ThirdSec() {
  return (
    <div className="third-sec">
      <div className="adSpace1">
        <div className="ad1">
          <p>Enjoy this headline space but use it wisely</p>
          <button className="takeMe-btn">TAKE ME THERE</button>
        </div>
        <img src={ad1} alt="ad img1" />
      </div>
      <div className="adSpace2">
        <img src={ad2} alt="ad img2" />
        <div className="ad2">
          <p>Buy, Sell </p>
          <p>Selling your watch?</p>
          <button className="takeMe-btn">TAKE ME THERE</button>
        </div>
      </div>
    </div>
  );
}
