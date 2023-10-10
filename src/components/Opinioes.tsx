import React from 'react';
import { Carousel } from 'antd';
import { useWindowSize } from './useScreenSize';


const App: React.FC = () => {

  const size = useWindowSize();
  const getSize =() =>{

    if (
      size.width > 1024
    )
    {return 3}
    if (
      size.width > 425
    )
    {return 2}
    return 1
  }
  return(
  <Carousel
  dots={false}
  swipeToSlide draggable
   autoplay
   slidesToShow={getSize()}
   autoplaySpeed={4000}
   pauseOnHover={true} 
   >
    <div>
    <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>
    <div>
    <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>
    <div>
    <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>
    <div>
    <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>
  </Carousel>
)};

function Opinions(props) {
  return (
    <div className="opinioncards">
      <p>{props.text}</p>
      <div className="cardpic">
        <img src={props.img}></img>
        <div className="cardtext">
          <h2>{props.name}</h2>
          <p>{props.cargo}</p>
        </div>
      </div>
    </div>
  );
}

export {App};

function Opinioes() {
  return (
    <div id="Opinioes" className="wrapperopinioesall">
      <div className="opinioestext">
        <h1 className="back">"</h1>
        <h1 className="opinion">
          Veja o que <span className="name2">nossos clientes</span>
          <br /> estão dizendo.
        </h1>
      </div>
      <App/>
    </div>
  );
}

export default Opinioes;
