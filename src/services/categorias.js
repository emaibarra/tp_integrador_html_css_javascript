import { categoriaActiva } from "../../main";
import { getLocalStorage } from "../persistence/localstorage";
import { renderList } from "../views/tienda";

// CATEGORIA //
const FilterProductosPorCategoria = (categoriaIn) => {
    const productos = getLocalStorage();

    switch (categoriaIn) {
        case categoriaActiva:
            renderList(productos)
            break;
            case "todo":
                renderList(productos)
                break;
            case "Hamburguesas":
            case "Papas":
            case "Gaseosas":
                const resultado = productos.filter((el) => el.categoria === categoriaIn)
                renderList(resultado);    
        default:
            break;
            case "mayorPrecio":
                const resultadoPrecioMayor = productos.sort((a,b)=> b.precio - a.precio);
                renderList(resultadoPrecioMayor);
            break;
            case "menorPrecio":
                const resultadoPrecioMenor = productos.sort((a,b)=> a.precio - b.precio);
                renderList(resultadoPrecioMenor);

            break;
    }
}

//render de la vista cateogiras
export const renderCategories = () =>{
    //tomamos elementos de la lista
    const ulList = document.getElementById("listaFiltro");
    //creamos estos elementos en la lista
    ulList.innerHTML = `
    <li class="listaSeleccionada" id= "todo">Todos los productos</li>
    <li id= "Hamburguesas">Hamburguesas</li>
    <li id= "Papas">Papas</li>
    <li id= "Gaseosas">Gaseosas</li>
    <li id= "mayorPrecio">Mayor Precio</li>
    <li id= "menorPrecio">Menor Precio</li>
    `;
//creamos el evento si se selecciona un elemento
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener('click', ()=>{
            clickActivo(liElement);
        });
    });

//verificamos si esta seleccionado o no un elemento de la lista
    const clickActivo = (elemento) => {
        FilterProductosPorCategoria(elemento.id);
        liElements.forEach((el) =>{
            if(el.classList.contains('listaSeleccionada')){
                el.classList.remove('listaSeleccionada');
            } else{
                if(elemento===el){
                    el.classList.add('listaSeleccionada')
                }
            }
        })
    }

};