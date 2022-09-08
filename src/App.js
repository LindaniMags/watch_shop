import "./App.css";
import { TopSec } from "./components/TopSec";
import { ThirdSec } from "./components/ThirdSec";
import { ForthSec } from "./components/ForthSec";
import { Footer } from "./components/Footer";
import { Images } from "./components/Images";

function App() {
  return (
    <div className="App">
      <TopSec />
      <Images />
      <ThirdSec />
      <ForthSec />
      <Footer />
    </div>
  );
}

export default App;
