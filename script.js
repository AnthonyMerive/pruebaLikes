import { data } from './data.js';

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = [];
let disLike = [];
//let control = 0;
document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})

const loadData = data => {
    data.forEach(personaje => {
        const { id, name, image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        templateCard.querySelector('.btn-danger').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })

    items.appendChild(fragment);
}

//Carga evento Click
items.addEventListener('click', e =>{
    addTotal(e) // va a la funcion addTotal
})
//funcion addTotal:
const addTotal = e => {
    if (e.target.classList.contains('btn-dark')){ //si toco el boton negro (like)
    setLike(e.target.parentElement); //vaya a la funcion setLike
    }else if(e.target.classList.contains('btn-danger')){ //contrario si toco (dislike)
        setDislike(e.target.parentElement); //vaya a funcion setdisLike
        }
}
//funcion seLike:
const setLike = objeto =>{
    const boton = { //creamos un objeto donde se almacene la cantidad y el id de la card
    id: objeto.querySelector('.btn-dark').dataset.id,
    cantidad : 1 //lo definimos en 1
    }
    if(like.hasOwnProperty(boton.id)){ //si da click al boton
        boton.cantidad = like[boton.id].cantidad+1; //sumele al objeto +1
        objeto.querySelector('#like').textContent = boton.cantidad; //guarde en el objeto
    }else{// de lo contrario para hacer que aumente el primer like en 1
        like[boton.id] = {...boton}; 
        objeto.querySelector('#like').textContent = boton.cantidad;
    }

    like[boton.id] = {...boton}; 

}
//funcion sedisLike:
const setDislike = objeto =>{
    const boton = { //creamos un objeto donde se almacene la cantidad y el id de la card
    id: objeto.querySelector('.btn-danger').dataset.id,
    cantidad : 1//lo definimos en 1
    }
    if(disLike.hasOwnProperty(boton.id)){//si da click al boton
        boton.cantidad = disLike[boton.id].cantidad+1;//sumele al objeto +1
        objeto.querySelector('#disLike').textContent = boton.cantidad;//guarde en el objeto
    }else{// de lo contrario para hacer que aumente el primer like en 1
        disLike[boton.id] = {...boton};
        objeto.querySelector('#disLike').textContent = boton.cantidad;
    }

    disLike[boton.id] = {...boton};

}


