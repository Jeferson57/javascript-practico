const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let index = 0; index < lista.length; index++) {
    //     sumaLista = sumaLista + lista[index];
    // }

    // El método reduce ejecuta una función reductora que reduce un array a un solo valor creando un nuevo array con ese valor. La función reductora recibe 2 parámetro: valorAcumulado, que es el valor que devuelve la función reductora y valorActual que es el elemento actual que está siendo procesado en el array. 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoActual){
            return valorAcumulado + nuevoActual;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}