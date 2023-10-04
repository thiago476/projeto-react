import React, { Component } from "react";
import "./index.css"
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";

class App extends Component {
  state = {
    livros:
      []
  };
  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function (error) {
        console.log("Erro na requisição");

      })
      .finally(function () {
        console.log("Sempre retorna")
      })
  };
  handlerRemoverLinha = (id) => console.log("Botão clicado");
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaFoot qdeLivros={this.state.livros.length} />
        <TabelaBody livros={this.state.livros} 
        removerLinha={this.handlerRemoverLinha}/>
      </table>
    );
  }
}
export default App;

// 