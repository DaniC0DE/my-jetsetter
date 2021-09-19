export function ObtenerItemsPorCategoria (lista, propiedad, valor) {
    let nuevaLista = lista.filter ((i) => {
        if (i[propiedad] === valor) {
            return i[propiedad] === valor;
        }
    })
    return nuevaLista
}

export function borrarItem (lista, id) {
    const listaModificada = lista.filter ((item) => {
        if(item.id !== id) {
            return item.id !== id;
        }
    });
    return listaModificada;
}