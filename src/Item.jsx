import { borrarItem } from "./utils.js";
import "./App.css";
import Trash from "./svg/Trash.svg";

function Item(props) {
  const manejadorCheckbox = () => {
    let nuevaLista = props.lista.map((i) => {
      if (i.id === props.id) {
        return {
          ...i,
          packed: !props.packed,
        };
      }
      return i;
    });
    props.setLista(nuevaLista);
  };

  const manejadorClickEliminarItem = () => {
    const nuevaLista = borrarItem(props.lista, props.id);
    props.setLista(nuevaLista);
  };

  return (
    <div className="Item">
      <div className="checkbox">
        <input
          checked={props.packed}
          onChange={manejadorCheckbox}
          type="checkbox"
        />
      </div>
      <div className="titleItem"> {props.nombre} </div>
      <button className="removebutton" onClick={manejadorClickEliminarItem}>
        <img width="14px" src={Trash} alt="trashIcon" />
      </button>
    </div>
  );
}

export default Item;
