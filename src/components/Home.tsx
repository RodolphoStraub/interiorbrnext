function Home() {
  return (
    <div id="Home" className="home">
      <div className="texthome">
        <h1 className="name">InteriorBr </h1>
        <h1>
          A moderna arte <br /> da simplicidade.
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit, sed do eiusmod tempor incididunt ut labore <br />
          et dolore magna aliqua.
          <br /> Ut enim ad minim veniam.
        </h2>
      </div>
      <div className="homerightside">
        <img
          className="sala"
          src="https://cdnm.westwing.com.br/glossary/uploads/br/2015/12/12052230/sala-de-estar-verde-com-pardede-pintada-quadro-aparador-de-madeira-e-palha-lumin%C3%A1ria-de-palha-poltrona-ros%C3%A9-plantas-e-ch%C3%A3o-de-madeira_unsplash_c-a2962.jpg"
          alt="Interior de uma sala verde"
        />
        <div className="backcolor"></div>
      </div>
    </div>
  );
}

export default Home;
