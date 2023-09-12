import Home from "../components/Home";
import Sobre from "../components/Sobre";
import Trabalhos from "../components/Trabalhos";
import Processo from "../components/Processo";
import Opinioes from "../components/Opinioes";
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
      <Opinioes />
    </div>
  );
}

export default App;
