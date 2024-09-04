import React from 'react';
import { Carousel} from 'antd';
import Link from 'next/link'
import { useWindowSize } from './useScreenSize';

const App: React.FC = () => {
  const size = useWindowSize();
  return(
  <Carousel
  dots={false}
  swipeToSlide draggable
   autoplay
   slidesToShow={ size.width && size.width > 1024 ? 2: 1 }
   autoplaySpeed={4000}
   pauseOnHover={true}
   >
    <div>
    <Link href='/trabalho'>
    <Trabalho img="https://revistazelo.com.br/wp-content/uploads/2023/01/Cozinha-em-2023-2-scaled.jpg" />
</Link>
    </div>
    <div>
    <Link href='/trabalho'>
    <Trabalho img="https://arkpad.com.br/wp-content/uploads/2020/05/quarto-simples-02.jpg" />
</Link>
    </div>
    <div>
    <Link href='/trabalho'>
    <Trabalho img="https://i0.wp.com/www.viajandonoape.com.br/wordpress/wp-content/uploads/2022/03/sala-de-estar-pequena-sofa-banco-dicas-ideias.jpg?fit=730%2C556&ssl=1" />
</Link>
    </div>
    <div>
    <Link href='/trabalho'>
    <Trabalho img="https://lh3.googleusercontent.com/mKcjEKNl2lyoaSxR_stENz0Ln9f1lrzPGepuNaJsNugXHnq-dqLtmVHL5VdOZK9GrdhtSciLWzB-HIMHa2JcSLoj7l3DmdOqU0SrWNQ1wiIQy4p711uUloRTyY3wZd9BCv99Y_LjeCXOFfsAfS5RWUo" />
</Link>
    </div>
  </Carousel>
)};

function Trabalho(props:any) {
  return (
    <div className="trabalhopic2">
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
