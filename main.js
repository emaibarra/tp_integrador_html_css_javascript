import { getLocalStorage, setLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categorias";
import { getProductosAtienda, renderList } from "./src/views/tienda";
import "./style.css";

//aplicacion




getLocalStorage();
//nos trae los productos a la pantalla 
getProductosAtienda();

renderCategories();
//Productos//
const botonAgregarElemento = document.getElementById("botonAgregarElemento");

botonAgregarElemento.addEventListener('click', () =>{
 abrirPopUp();
})



//Popup//

const botonCancelar = document.getElementById("botonCancelar")


botonCancelar.addEventListener('click', ()=>{
    cerrarPopUp();
})


//Funciones de abrir y cerrar popup //
const abrirPopUp = () =>{
    const popUpmain = document.getElementById("modalPopUp");
    popUpmain.style.display = "flex";
}
const cerrarPopUp = () =>{
    const popUpmain = document.getElementById("modalPopUp");
    popUpmain.style.display = "none";
}
//guardar o modificar elementos

const botonEliminar = document.getElementById("botonEliminar");
const botonGuardar = document.getElementById("botonAgregar");

botonGuardar.addEventListener('click', () => {
    agregarEliminarElementos();
})

const agregarEliminarElementos = () =>{
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("selectCategoria").value;

    let object = {
        id : new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categoria,
    }
    setLocalStorage(object);
    getProductosAtienda();
    cerrarPopUp();
}
