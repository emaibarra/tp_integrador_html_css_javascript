//TIENDA // 


import { setProdActivo } from "../../main";
import { getLocalStorage } from "../persistence/localstorage"
import { abrirPopUp } from "./modal";

export const getProductosAtienda = () => {

    const products = getLocalStorage();
    renderList(products);

}
//filtra los productos por categoria y los renderiza
export const renderList = (productosIn) =>{

    const hamburguesas = productosIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas");

    const grupoProductoRender = (productos, titulo) => {
        if (productos.length > 0){
            const productosHTML = productos.map((producto, index) => {
                return `<div class='targetItem' id='product-${producto.categoria}-${index}'>
                <div>
                <img src='${producto.imagen}'/>
                <div>
                <h2> ${producto.nombre}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                
                </div>

                </div>
                </div>`;
            });

            return `
            <section class= 'sectionTienda'>
            <div class='tituloSeccion'>
            <h3>${titulo}</h3>
            </div>
            <div class='productoTienda'>
            ${productosHTML.join("")}
            </div>
            </section>
            `
        } else{
            return "";
        }
    }

    //renderizar los productos en sus categ

    const appContainer = document.getElementById("tiendaContainer");
    appContainer.innerHTML= `
    ${grupoProductoRender(hamburguesas,"Hamburguesas")}
    ${grupoProductoRender(papas,"Papas")}
    ${grupoProductoRender(gaseosas,"Gaseosas")}
    
    `

    const addEvents = (productoIn) =>{
        
        if(productoIn){
        productoIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                productContainer.addEventListener('click', ()=>{
                    setProdActivo(element);
                    abrirPopUp();
                });
        });
        }
    }
addEvents(hamburguesas);
addEvents(papas);
addEvents(gaseosas);
};