import React from "react";
import {
  banheiroslistData,
  cozinhalistData,
  quartoslistData,
  salaslistData,
} from "@/Data/Data";
import List from "@/Data/List";

const trabalho = () => {
  return (
    <div className="trabalhoall">
      <div className="trabalho1">
        <h1>Cozinhas</h1>
        <List data={cozinhalistData} />
      </div>
      <div className="trabalho2">
        <h1>Quartos</h1>
        <List data={quartoslistData} />
      </div>
      <div className="trabalho3">
        <h1>Salas</h1>
        <List data={salaslistData} />
      </div>
      <div className="trabalho4">
        <h1>Banheiros</h1>
        <List data={banheiroslistData} />
      </div>
    </div>
  );
};

export default trabalho;
