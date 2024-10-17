//render de la vista cateogiras

export const renderCategories = () =>{
    //tomamos elementos de la lista
    const ulList = document.getElementById("listaFiltro");
    //creamos estos elementos en la lista
    ulList.innerHTML = `
    <li class="listaSeleccionada" id= "todo">Todos los productos</li>
    <li id= "hamburguesas">Hamburguesas</li>
    <li id= "papas">Papas</li>
    <li id= "gaseosas">Gaseosas</li>
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