// //LocalStorage// //


//get de localStorage
export const getLocalStorage = () => {
    const productos = JSON.parse(localStorage.getItem("productos"));

    if(productos){
        return productos;
    } else return [];
}

//guardar lcstg

export const setLocalStorage = (productoIngresado) =>{
    if(productoIngresado){
    
    let productosEnLocal = getLocalStorage();

    const existingIndex = productosEnLocal.findIndex((productsLocal)=>
        productsLocal.id === productoIngresado.id
    )

    if(existingIndex===!-1){
        productosEnLocal[existingIndex] = productoIngresado;
    } else{
        productosEnLocal.push(productoIngresado);
    }

    localStorage.setItem("productos", JSON.stringify(productosEnLocal));
   }
}