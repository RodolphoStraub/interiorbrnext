import React from "react";
import { Carousel } from "antd";

interface CardProps {
  data: any[];
}

function List({ data }: CardProps) {
  return (
    <div>
      <Carousel
        dots={false}
        swipeToSlide
        draggable
        autoplay
        slidesToShow={3}
        autoplaySpeed={4000}
        pauseOnHover={true}
      >
        {data.map((item) => (
          <div key={item.id}>
            <div className="fundo">
              <div
                className="trabalhopic"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <h2 className="title">{item.title}</h2>
                <p className="texts"> {item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default List;
