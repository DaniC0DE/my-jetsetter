import React, {useState} from "react";
import Item from "./Item";

export default function Items (props) {
    const [inputState, setInputState] = useState("");

    const manejadorInput = (e) => {
        setInputState(e.target.value);
    }

    let listaFiltrada = props.items;

    if (inputState.lenght > 0) {
        listaFiltrada = props.items.filter((i) => {
            if(i.value.toUpperCase().includes(inputState.toLocaleUpperCase())){
               return true;
            }
        });
    }

    return(
        <div className="ItemsContainer">
            <h1> {props.title}{props.items.lenght} </h1>
            <input onchange={manejadorInput} type="text" value={inputState} />
            {listaFiltrada.map ((item) =>{
                return (
                    <Item nombre={item.value} id={item.id} packed={item.packed} lista={props.lista} setLista={props.setLista} />
                )
            })}
        </div>
    )
}