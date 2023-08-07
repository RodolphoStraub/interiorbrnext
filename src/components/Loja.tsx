import React from 'react';
import { Carousel } from 'antd';

const App: React.FC = () => (
  <Carousel
 arrows
  dots ={true}
   autoplay
   slidesToShow={3}
   autoplaySpeed={4000}
   pauseOnHover={true}
   >
    <div>
    <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>
    <div>
    <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>
    <div>
    <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>
    <div>
    <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>
  </Carousel>
);

function Lojacard(props) {
  return (
    <div className="lojacards">
      <div className="lojapic">
        <img src={props.img}></img>
        <div className="lojatext">
          <h2>{props.name}</h2>
          <p>{props.preço}</p>
        </div>
      </div>
    </div>
  );
}

export {App};

function Loja() {
  return (
    <div id="Loja" className="wrapperlojaall">
      <div className="wrapperlojaleft">
        <h1 className="lojatext">
          <span className="name2">Compre</span> os
          <br /> nossos itens.
        </h1>
        <button className="botao"> Veja mais</button>
      </div>
      <div className="wrapperlojaright">
        <App/>
      </div>
    </div>
  );
}

export default Loja;
