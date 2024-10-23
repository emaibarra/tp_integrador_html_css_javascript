//Popup//

import { productoActivo, setProdActivo } from "../../main";
import { borrarProducto } from "../services/products";

const botonCancelar = document.getElementById("botonCancelar")
botonCancelar.addEventListener('click', ()=>{
    handleCancelButton();
})

const handleCancelButton = () =>{
    cerrarPopUp();
}


//Funciones de abrir y cerrar popup //
export const abrirPopUp = () =>{
    const popUpmain = document.getElementById("modalPopUp");
    popUpmain.style.display = "flex";
    const botonDelete = document.getElementById("botonEliminar")
    if (productoActivo) {
        botonDelete.style.display = "block";
    } else {
        botonDelete.style.display = "none";
    }





    if(productoActivo){
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("selectCategoria");
    nombre.value=productoActivo.nombre;
    precio.value=productoActivo.precio;
    imagen.value=productoActivo.imagen;
    categoria.value=productoActivo.categoria;
    }
};

export const cerrarPopUp = () =>{
    const popUpmain = document.getElementById("modalPopUp");
    popUpmain.style.display = "none";
    setProdActivo(null);
    resetModal();
};

 const resetModal = () =>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("selectCategoria");

    nombre.value="";
    precio.value=0;
    imagen.value="";
    categoria.value="Seleccione una categoria";

 };

 const botonBorrar = document.getElementById("botonEliminar");
 botonBorrar.addEventListener('click', ()=>{
    handleBorrarBoton();
 })


const handleBorrarBoton = () =>{
    borrarProducto();
} 