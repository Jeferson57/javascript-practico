// Lista que solo tenga los salarios de las personas
const salariosCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

// Ordernar la lista
const salariosColSorted = salariosCol.sort(
    function (a, b) {
        return a - b; 
    }
);

// Calcular la mediana de salarios
function esPar (number) {
    return (number % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoActual){
            return valorAcumulado + nuevoActual;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.lenght)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana Top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    {
        medianaGeneralCol,
        medianaTop10Col
    }
);