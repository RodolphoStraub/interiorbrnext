import React from 'react'
import { Carousel} from 'antd';

const App: React.FC = () => (
  <Carousel
  dots={false}
  swipeToSlide draggable
   autoplay
   slidesToShow={3}
   autoplaySpeed={4000}
   pauseOnHover={true}
   >
    <div>
    <Trabalhos img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
    </div>
    <div>
    <Trabalhos img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
    </div>
    <div>
    <Trabalhos img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
    </div>
    <div>
    <Trabalhos img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
    </div>
  </Carousel>
);

function Trabalhos(props) {
  return (
    <div className="trabalhopic">
      <img src={props.img}></img>
    </div>
  );
}

type Props = {}

const trabalho = (props: Props) => {
  return (
    <div className='trabalhoall'>
      <div className="trabalho1">
        <h1>Cozinhas</h1>
        <App/>
      </div>
      <div className="trabalho2">
        <h1>Quartos</h1>
        <App/>
      </div>
      <div className="trabalho3">
        <h1>Salas</h1>
        <App/>
      </div>
      <div className="trabalho4">
        <h1>Banheiros</h1>
        <App/>
      </div>
    </div>
  )
}

export default trabalho