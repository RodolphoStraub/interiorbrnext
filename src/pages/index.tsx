import Home from "../components/Home";
import Sobre from "../components/Sobre";
import Trabalhos from "../components/Trabalhos";
import Processo from "../components/Processo";
import Loja from "../components/Loja";
import Opinioes from "../components/Opinioes";
import Contato from "../components/Contato";
import Head from "next/head";

function App() {
  return (
    <div>
       <Head>
        <title>InteriorBr</title>
      </Head>
      <Home />
      <Sobre />
      <Trabalhos />
      <Processo />
      <Loja />
      <Opinioes />
      <Contato />
    </div>
  );
}

export default App;
