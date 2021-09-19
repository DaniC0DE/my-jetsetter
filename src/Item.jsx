import {borrarItem} from "./utils.js";
import "./App.css";

function Item (props) {

    const manejadorCheckbox  = () => {
        let nuevaLista = props.lista.map((i) =>{
            if(i.id === props.id){
                return {
                    ...i,
                    packed: !props.packed,
                };
            }
            return i;
        });
        props.setLista(nuevaLista)
    };

    const manejadorClickEliminarItem = () => {
        const nuevaLista = borrarItem(props.lista, props.id);
        props.setLista(nuevaLista);
    };

    return (
        <div className="Item">
            <input checked={props.packed} onChange={manejadorCheckbox} type="checkbox" />
            <div> {props.nombre} </div>
            <button onClick={manejadorClickEliminarItem} >Remover</button>
        </div>
    )
}

export default Item;