import React from 'react';
import { Carousel, Icon } from 'antd';



const App: React.FC = () => (
  <Carousel
  arrows
  dots ={true}
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
        <button className="botao">Explorar</button>
      </div>
      <div className="wrappertrabalhosright">
        <App/>
      </div>
    </div>
  );
}

export default Trabalhos;
