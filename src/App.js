import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Camila";
  const nome2 = "Paula";

  function apresentaGaragem(nome) {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  // const carro = { nome: "Fusca", cor: "Branco", ano: 1980, isFlex: false };

  const carros = [
    { nome: "C3", cor: "Preto", ano: 2018, isFlex: true },
    { nome: "Gol", cor: "Amarelo", ano: 2023, isFlex: false },
    { nome: "Corolla", cor: "Prata", ano: 2020, isFlex: false },
    { nome: "Etios", cor: "Prata", ano: 2017, isFlex: true },
  ];

  return (
    <div>
      {/* <Garagem
        nome={nome}
        apresentaGaragem={apresentaGaragem}
        nomeCarro={carro.nome}
        corCarro={carro.cor}
        anoCarro={carro.ano}
        carroFlex={carro.isFlex}
      /> */}

      <Garagem
        nome={nome2}
        apresentaGaragem={apresentaGaragem}
        carro1 = {carros[0]}
        carro2 = {carros[1]}
        carro3 = {carros[2]}
        carro4 = {carros[3]}
      />
    </div>
  );
}
