import React from "react";
import { Carousel } from "antd";
import { salaslistData } from "./Data";

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
    {salaslistData.map((sala) => (
      <div key={sala.id}>
        <Sala img={sala.imageUrl} />
      </div>
    ))}
  </Carousel>
);

function Sala(props) {
  return (
    <div className="trabalhopic">
      <img src={props.img}></img>
    </div>
  );
}

type Props = {};

function SalaList(props) {
  return (
    <div>
      <App />
    </div>
  );
}

export default SalaList;