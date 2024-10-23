
import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { getLocalStorage, setLocalStorage } from "../persistence/localstorage";
import { cerrarPopUp } from "../views/modal";
import { getProductosAtienda, renderList } from "../views/tienda";

//Productos

const botonGuardar = document.getElementById("botonAceptar");
//boton guardar
botonGuardar.addEventListener('click', ()=>{
    agregarModificarElementos();
})

//guardar elementos
const agregarModificarElementos = () =>{
    console.log(productoActivo);
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("selectCategoria").value;
    let object = null;

    if(productoActivo) {
        object= {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        };
        }else{
        object = {
            id : new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto guardado correctamente.",
        showConfirmButton: false,
        timer: 1500
      });
      
    setLocalStorage(object);
    getProductosAtienda();
    cerrarPopUp();
}

//eliminar elemento

export const borrarProducto=() =>{
    Swal.fire({
        title: "Estas seguro?",
        text: "Esta acción no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminalo!"
      }).then((result) => {
        if (result.isConfirmed) {
            const productos = getLocalStorage();
            const resultado = productos.filter((el) => el.id !== productoActivo.id);
            
            localStorage.setItem("productos", JSON.stringify(resultado));
            const nuevoProducto = getLocalStorage();
            renderList(nuevoProducto);
            cerrarPopUp();
        } else{
            cerrarPopUp();
        }
      });




};