import sobre from '@/pages/sobre';
import Link from 'next/link'

function Sobre() {
  return (
    <div id="Sobre" className="wrapperall">
      <div className="wrapperleft">
        <div>
          <img
            className="img1"
            src="https://i.pinimg.com/736x/17/20/0d/17200d2d29ec036549547293388badc1.jpg"
            alt="interior sala canto"
          ></img>
          <img
            className="img2"
            src="https://i.pinimg.com/736x/3f/78/af/3f78afe3c0bf4541c638d3eeb9c0d6fc.jpg"
            alt="escritório"
          ></img>
        </div>
        <div className="box">
          <p>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <div className="picname">
            <img
              src="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
              alt="cliente"
            ></img>
            <p>Sergio B.</p>
          </div>
        </div>
      </div>
      <div className="wrapperright">
        <h1>Ganhador do prêmio</h1>
        <h1 className="name2">interior Design Studio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <h2>Jamie Phoenix, CEO</h2>
        <Link href='/sobre'>
        <button className="botao">Saiba mais</button>
        </Link>
      </div>
    </div>
  );
}

export default Sobre;
