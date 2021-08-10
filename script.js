import { data } from './data.js';

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = [];
let disLike = [];
let control = 0;
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

items.addEventListener('click', e => {
    addTotal(e)
})

const addTotal = e => {
    if (e.target.classList.contains('btn-dark')) {
        setTotal(e.target.parentElement);
        control = 1;
    } else if (e.target.classList.contains('btn-danger')) {
        setTotal(e.target.parentElement);
        control = 2;
    }
}

const setTotal = objeto => {
    const botonLike = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad: 1
    }
    const botonDislike = {
        id: objeto.querySelector('.btn-danger').dataset.id,
        cantidad: 1
    }

    if (like.hasOwnProperty(botonLike.id) && control == 1) {
        botonLike.cantidad = like[botonLike.id].cantidad + 1;
        objeto.querySelector('#total-likes').textContent = botonLike.cantidad;
    } else if (disLike.hasOwnProperty(botonDislike.id) && control == 2) {
        botonLike.cantidad = like[botonLike.id].cantidad - 1;
        objeto.querySelector('#total-likes').textContent = botonLike.cantidad;
    }  else {
        like[botonLike.id] = { ...botonLike };
        disLike[botonDislike.id] = { ...botonDislike };
        objeto.querySelector('#total-likes').textContent = botonLike.cantidad;
    }

    like[botonLike.id] = { ...botonLike };
    console.log(like[botonLike.id])
    console.log(`control es ${control}`);
}


