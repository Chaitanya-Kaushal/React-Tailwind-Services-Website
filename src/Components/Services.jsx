import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className="w-full h-full relative">
      <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={2000}>
        <div>
          <img src={img1} alt="Item1" />
          <p className="text-xl py-2   text-blue-600 font-semibold  bg-gray-300 hover:bg-gray-800">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="text-xl py-2  text-blue-600 font-semibold  bg-gray-300 hover:bg-gray-800">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
