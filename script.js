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


items.addEventListener('click', e =>{
    addTotal(e)
})

const addTotal = e => {
    if (e.target.classList.contains('btn-dark')){
    setLike(e.target.parentElement);
    }else if(e.target.classList.contains('btn-danger')){
        setDislike(e.target.parentElement);
        }
}

const setLike = objeto =>{
    const boton = {
    id: objeto.querySelector('.btn-dark').dataset.id,
    cantidad : 1
    }
    if(like.hasOwnProperty(boton.id)){
        boton.cantidad = like[boton.id].cantidad+1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }else{
        like[boton.id] = {...boton};
        objeto.querySelector('#like').textContent = boton.cantidad;
    }

    like[boton.id] = {...boton};

}

const setDislike = objeto =>{
    const boton = {
    id: objeto.querySelector('.btn-danger').dataset.id,
    cantidad : 1
    }
    if(disLike.hasOwnProperty(boton.id)){
        boton.cantidad = disLike[boton.id].cantidad+1;
        objeto.querySelector('#disLike').textContent = boton.cantidad;
    }else{
        disLike[boton.id] = {...boton};
        objeto.querySelector('#disLike').textContent = boton.cantidad;
    }

    disLike[boton.id] = {...boton};

}


