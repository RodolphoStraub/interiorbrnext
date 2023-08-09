import React from "react";
import { Carousel } from "antd";
import { banheiroslistData } from "./Data";

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
    {banheiroslistData.map((banheiro) => (
      <div key={banheiro.id}>
        <Banheiro img={banheiro.imageUrl} />
      </div>
    ))}
  </Carousel>
);

function Banheiro(props) {
  return (
    <div className="trabalhopic">
      <img src={props.img}></img>
    </div>
  );
}

type Props = {};

function BanheiroList(props) {
  return (
    <div>
      <App />
    </div>
  );
}

export default BanheiroList;