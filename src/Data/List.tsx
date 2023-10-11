import React from "react";
import { Carousel } from "antd";
import { useWindowSize } from '../components/useScreenSize';


interface CardProps {
  data: any[];
}

function List({ data }: CardProps) {

  const size = useWindowSize();
  const getSize =() =>{

    if (
      size.width > 1440
    )
    {return 3}
    if (
      size.width > 1024
    )
    {return 2}
    if(
      size.width > 768
    )
    {return 2}
    if(
      size.width > 425
    )
    {return 1}
    return 1
  }
  return (
    <div>
      <Carousel
        dots={false}
        swipeToSlide
        draggable
        autoplay
        slidesToShow={getSize()}
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
