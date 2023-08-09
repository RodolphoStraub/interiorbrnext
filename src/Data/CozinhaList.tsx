import React from "react";
import { Carousel } from "antd";
import { cozinhalistData } from "./Data";

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
    {cozinhalistData.map((cozinha) => (
      <div key={cozinha.id}>
        <Trabalhos img={cozinha.imageUrl} />
      </div>
    ))}
  </Carousel>
);

function Trabalhos(props) {
  return (
    <div className="trabalhopic">
      <img src={props.img}></img>
    </div>
  );
}

type Props = {};

function CozinhaList(props) {
  return (
    <div>
      <App />
    </div>
  );
}

export default CozinhaList;
