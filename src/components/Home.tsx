
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
          src="https://casacor.abril.com.br/wp-content/uploads/sites/7/2021/04/up-arquitetura-casa-up-casacor-rio-de-janeiro-2021-foto-andre-nazareth-sofa-verde.jpg?quality=80&strip=info"
          alt="Interior de uma sala verde"
        />
        <div className="backcolor"></div>
      </div>
    </div>
  );
}

export default Home;
