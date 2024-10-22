//TIENDA // 

import { getLocalStorage } from "../persistence/localstorage"

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
                return `<div id='product-${producto.categoria}-${index}'>
                <div>
                <img src${producto.imagen}/>
                <div>
                <h2> ${producto.nombre}</h2>
                </div>
                <div>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                <p><b>Categoria:</b> ${producto.categoria}</p>
                </div>

                </div>
                </div>`;
            });

            return `
            <section>
            <h3>${titulo}</h3>
            <div>
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
            const productContainer = document.getElementById(
                `product-${element.categoria}-${index}`
            )
                productContainer.addEventListener('click', ()=>{
                    console.log("productoActivo", element);
                })
        });
        }
    }
addEvents(hamburguesas);
addEvents(papas);
addEvents(gaseosas);
};