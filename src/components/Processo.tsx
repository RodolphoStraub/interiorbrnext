function Icon(props) {
  return (
    <div className="iconbox">
      <img className="icon" src={props.img}></img>
      <p>{props.name}</p>
    </div>
  );
}

function Processo() {
  return (
    <div id="Processo" className="wrapperprocessoall">
      <div className="wrapperprocessoleft">
        <img
          src="https://s2.glbimg.com/7htrz844LIr-3SlrcBwKJxDGQ7g=/e.glbimg.com/og/ed/f/original/2018/03/07/decoracao-de-sala-sofa-e-almofadas-cinza-poltronas-verde-espelho-na-parede-cortina-branca-lustre-mesa-de-centro-vidro-tapete-listrado.jpg"
          alt="sala interior"
        ></img>
        <div className="processobox">
          <div className="processoicon">
            <Icon
              img="https://www.svgrepo.com/show/20845/bright-light-bulb.svg"
              name="Conceito"
            />
            <Icon
              img="https://cdn-icons-png.flaticon.com/512/171/171096.png"
              name="Planejamento"
            />
            <Icon
              img="https://static.thenounproject.com/png/1555241-200.png"
              name="Design"
            />
            <Icon
              img="https://cdn-icons-png.flaticon.com/512/3700/3700776.png"
              name="Construção"
            />
            <Icon
              img="https://cdn-icons-png.flaticon.com/512/45/45802.png"
              name="Entrega"
            />
          </div>
        </div>
      </div>
      <div className="wrapperprocessoright">
        <h1>
          <span className="name2">Nosso processo</span> torna <br />
          os sonhos realidade
        </h1>
        <div className="textabout">
          <img
            className="number"
            src="data:image/png;base64,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"
            alt="número 1"
          />
          <h2>Perfeição em cada detalhe</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumdolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <div className="textabout">
          <img
            className="number"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShN46tRE6DDdHJgXuCc7DomyEIE8Twoof-OA&usqp=CAU"
            alt="numero dois"
          ></img>
          <h2>Ideias simples & Design</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <div className="textabout">
          <img
            className="number"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qlfiNE7ZRlSkZ1GBuSJIx_8s0d5TGeKI42WSoGatxWZ4zTaGeX0KHzUhpOETEefSfy4&usqp=CAU"
            alt="numero três"
          ></img>
          <h2>Conforto</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
    </div>
  );
}

export default Processo;
