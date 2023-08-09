import React from "react";
import { Carousel } from "antd";
import { quartoslistData } from "./Data";

const App: React.FC = (props) => (
  <Carousel
    dots={false}
    swipeToSlide
    draggable
    autoplay
    slidesToShow={3}
    autoplaySpeed={4000}
    pauseOnHover={true}
  >
    {quartoslistData.map((quarto) => (
      <div key={quarto.id}>
        <Quartos img={quarto.imageUrl} />
      </div>
    ))}
  </Carousel>
);

function Quartos(props) {
  return (
    <div className="trabalhopic">
      <img src={props.img}></img>
    </div>
  );
}

type Props = {};

function QuartoList(props) {
  return (
    <div>
      <App />
    </div>
  );
}

export default QuartoList;