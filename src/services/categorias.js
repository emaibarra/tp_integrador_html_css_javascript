//render de la vista cateogiras

const renderCategories = () =>{
    const ulList = document.getElementById("listaFiltro");
    ulList.innerHTML = `
    <li id= "todo">Todos los productos</li>
    <li id= "hamburguesas">Hamburguesas</li>
    <li id= "papas">Papas</li>
    <li id= "gaseosas">Gaseosas</li>
    <li id= "mayorPrecio">Mayor Precio</li>
    <li id= "menorPrecio">Menor Precio</li>
    `;
};