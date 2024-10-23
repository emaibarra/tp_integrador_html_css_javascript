import { getLocalStorage } from "../persistence/localstorage";
import { renderList } from "../views/tienda";

export const buscarProductoPorNombre = () =>{
    const inputBuscar = document.getElementById("inputBuscar");
    const productos = getLocalStorage();
console.log(productos);
    const resultado = productos.filter((el)=>
    el.nombre.toLowerCase().includes(inputBuscar.value)
);
renderList(resultado);
}