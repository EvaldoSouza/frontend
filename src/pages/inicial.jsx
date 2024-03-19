//vai ter tres botões, um para cada uma das outras paginas
import React from "react";
import { Link } from "react-router-dom";

const Inicial = () => {
  //Preciso melhorar isso. Fazer um componente "botao" para usar
  return (
    <div>
      <h1>Pagina Inicial</h1>
      <div>
        <Link to="/criarCartao">
          <button> Criar Cartão</button>
        </Link>
      </div>
      <div>
        <Link to="/criarTeste">
          <button>Criar Teste</button>
        </Link>
      </div>
      <div>
        <Link to="/realizarTeste">
          <button>Realizar Teste</button>
        </Link>
      </div>
    </div>
  );
};

export default Inicial;
//reactArrowFunctionExportComponent
