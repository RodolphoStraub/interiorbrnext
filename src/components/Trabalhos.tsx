import React from 'react';
import { Carousel} from 'antd';
import Link from 'next/link'

const App: React.FC = () => (
  <Carousel
  dots={false}
  swipeToSlide draggable
   autoplay
   slidesToShow={2}
   autoplaySpeed={4000}
   pauseOnHover={true}
   >
    <div>
    <Trabalho img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
    </div>
    <div>
    <Trabalho img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
    </div>
    <div>
    <Trabalho img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
    </div>
    <div>
    <Trabalho img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
    </div>
  </Carousel>
);

function Trabalho(props) {
  return (
    <div className="trabalhopic">
      <img src={props.img}></img>
    </div>
  );
}

export {App};

function Trabalhos() {
  return (
    <div id="Trabalhos" className="wrappertrabalhosall">
      <div className="wrappertrabalhosleft">
        <h1>
          <span className="name2">100+ projetos</span>
          <br /> por todo o mundo.
        </h1>
        <p className="trabalhotext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <Link href='/trabalho'>
        <button className="botao">Explorar</button>
        </Link>
      </div>
      <div className="wrappertrabalhosright">
        <App/>
      </div>
    </div>
  );
}

export default Trabalhos;
