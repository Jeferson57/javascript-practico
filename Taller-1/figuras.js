// Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}


// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function alturaTriangulo(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base) {
        const lado1AlCuadrado = lado1 * lado1;
        const baseAlCuadrado = base * base;
        const baseDividada4 = baseAlCuadrado / 4;
        const lado1MenosBase = lado1AlCuadrado - baseDividada4;
        const altura = Math.sqrt(lado1MenosBase);

        return "La altura del triángulo es: " + altura;
    }
}


// PI
const PI = Math.PI

// Código del circulo
// Diámetro
function diametroCirculo(radio) {
    return radio * 2
}


// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es de: " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es de: " + area + "cm");
}


function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const valueLado2 = inputLado2.value;

    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = inputBase.value;

    if (valueLado1 == valueLado2 && valueLado1 != valueBase) {
        const altura = alturaTriangulo(valueLado1, valueLado2, valueBase);
        alert(altura);   
    } else {
        alert("El triángulo debe de ser isóceles");
    }
}