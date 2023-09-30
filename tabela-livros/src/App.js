import React from "react";
import TabelaHead from " ./components/tabelahead";
import TabelaFoot from "./components/Tabelafoot";
import TabelaBody from ". /components/TabelaBody";
function App() {
  return (
    <table className="tabela">
      <TabelaHead />
      <TabelaFoot />
      <TabelaBody />
    </table>
  );
}
export default App;