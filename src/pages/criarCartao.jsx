import React, { useEffect, useState } from "react";
import axios from "axios";

const CriarCartao = () => {
  const [cartoesCadastrados, setCartoes] = useState([]); //pra que serve isso?

  useEffect(() => {
    const fetchTodosCartoes = async () => {
      try {
        const res = await axios.get("http://localhost:8080/todosCartoes"); //O metodo get não está funcionando no server.js. Não sei por que.
        setCartoes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodosCartoes();
  });
  //Mostrar os cartões aqui
  return (
    <div>
      <h1>Cartões já Cadastrados</h1>
      <div className="cartoes">
        {cartoesCadastrados.map((cartao) => (
          <div className="cartao">
            <h2>{cartao.nome}</h2>
            <p>{cartao.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriarCartao;
