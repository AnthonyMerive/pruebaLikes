## likes total en un solo label:

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