import { useState } from "react";
import "./App.css";
import { defaultState } from "./products.js";
import { ObtenerItemsPorCategoria } from "./utils.js";
import Items from "./Items";
import uniqueId from "lodash/uniqueId";
import Jetsetter from "./svg/Jetsetter.svg";

function App() {
  const [state, setState] = useState("");

  const [lista, setLista] = useState(defaultState);

  const manejadorAgregarItem = (e) => {
    return setState(e.target.value);
  };

  const manejadorSubmit = (e) => {
    e.preventDefault();
    let nuevoItem = {
      value: state,
      id: uniqueId(),
      packed: false,
    };
    let nuevaLista = [...lista, nuevoItem];
    setLista(nuevaLista);
  };

  const handleButton = () => {
    let listaTodoDesempacado = lista.map((item) => {
      return {
        ...item,
        packed: false,
      };
    });
    setLista(listaTodoDesempacado);
  };

  const listaDesempacados = ObtenerItemsPorCategoria(lista, "packed", false);
  const listaEmpacados = ObtenerItemsPorCategoria(lista, "packed", true);

  return (
    <div className="App">
      <img height="250px" width="300px" src={Jetsetter} alt="Logo" />
      <div className="Container">
        <form className="formTop">
          <label>
            <input
              className="input-top"
              onChange={manejadorAgregarItem}
              type="text"
              value={state}
            />
          </label>
          <input
            className="submit-top"
            onClick={manejadorSubmit}
            type="submit"
            value="Agregar item"
          />
        </form>
        <Items
          title="Items no empacados"
          items={listaDesempacados}
          lista={lista}
          setLista={setLista}
        />
        <Items
          title="Items empacados"
          items={listaEmpacados}
          lista={lista}
          setLista={setLista}
        />
        <div>
          <button onClick={handleButton}> Marcar todo desempacado </button>
        </div>
      </div>
    </div>
  );
}

export default App;
