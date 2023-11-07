import BestOffer from "../component/Home/BestOffer";
import SaleFifty from "../component/Home/SaleFifty";
import Slider from "../component/Home/Slider";
import TopSale from "../component/Home/TopSale";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TopSale></TopSale>
      <BestOffer></BestOffer>
      <SaleFifty></SaleFifty>
    </div>
  );
};

export default Home;
