const lista2 = [
    100,
    200,
    500,
    4000000,
    59,
    30,
    7000,
    62,
    100,
    500,
    500,
    59,
    100,
    100,
    100,
    62,
    62,
    30,
    7000,
    4000000,
    100,
    100
];

// Calcular promedio
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

// Calcular mediana
function calcularMediana(lista) {
    // Ordenamos la lista
    const listaOrdenada = lista.sort(function compareNumbers(a, b){
        return a - b;
    });

    // El valor que esta en la mitad de la lista
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;

    // Código para las lista pares
    function esPar(number){
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    };

    if (esPar(listaOrdenada)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana  = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

// Calcular moda
const listaCount = {};

lista2.map(
    function(elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    fucntion(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }
);

const moda = listaArray[listaArray.lenght - 1];
