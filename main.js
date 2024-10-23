import { getLocalStorage, setLocalStorage } from "./src/persistence/localstorage";
import { buscarProductoPorNombre } from "./src/services/barraDeBusqueda";
import { renderCategories } from "./src/services/categorias";
import { abrirPopUp } from "./src/views/modal";
import { getProductosAtienda, renderList } from "./src/views/tienda";
import "./style.css";

//aplicacion
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setProdActivo = (productoIn) => {
    productoActivo = productoIn;
};


getLocalStorage();
//nos trae los productos a la pantalla 
getProductosAtienda();
renderCategories();

//header

const botonAgregarElemento = document.getElementById("botonAgregarElemento");
botonAgregarElemento.addEventListener('click', () =>{
 abrirPopUp();
})

const botonBuscar = document.getElementById("botonBuscar")
botonBuscar.addEventListener('click', ()=>{
    buscarProductoPorNombre();
});


