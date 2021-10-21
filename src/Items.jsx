import React, { useState } from "react";
import Item from "./Item";

export default function Items(props) {
  const [inputState, setInputState] = useState("");

  const manejadorInput = (e) => {
    setInputState(e.target.value);
  };

  let listaFiltrada = props.items;

  if (inputState.length > 0) {
    // eslint-disable-next-line array-callback-return
    listaFiltrada = props.items.filter((i) => {
      if (i.value.toUpperCase().includes(inputState.toUpperCase())) {
        return true;
      }
    });
  }

  return (
    <div className="ItemsContainer">
      <div className="title-searchbar-container">
        <h1 className="ItemsTitle">
          {props.title}
          {props.items.lenght}{" "}
        </h1>
        <input
          className="input-items"
          onChange={manejadorInput}
          type="text"
          value={inputState}
          placeholder="buscar..."
        />
      </div>
      {listaFiltrada.map((item) => {
        return (
          <Item
            nombre={item.value}
            id={item.id}
            packed={item.packed}
            lista={props.lista}
            setLista={props.setLista}
          />
        );
      })}
    </div>
  );
}
