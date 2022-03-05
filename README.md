# Javascript-practico

...

## Taller #1: figuras geométricas

- Primer paso: definir las fórmulas
- Segundo paso: Implementar las fórmulas en JavaScript
- Tercer paso: crear funciones
- Cuarto paso: Integrr JavaScript con HTML

## Taller #2: porcentajes y descuentos 

 - Primer paso: definir las fórmulas
 - Segundo paso: implementar las fórmulas en JavaScript
 - Tercer paso: crear funciones
 - Cuarto paso: integrar JavaScript con HTML

### ¿Cómo calcular porcentajes y descuentos?
Para este taller vamos a calcular porcentajes, precios y descuentos.

Supongamos que tenemos una tienda, y queremos darles un descuento a nuestros productos para motivar a nuestros clientes a comprar. Pero, sólo saben de cuánto es el descuento en porcentajes y no saben cuanto realmente van a terminar pagando. Entonces los clientes no se motivan a comprar.

Lo que haremos será crear un programa que le diga a nuestros clientes cuanto realmente valen sus productos luego de aplicarles un descuento.

La fórmula matemática para hacer esto es: `[precio * (100 - descuento)] / 100`

## Taller #3: promedio, moda y mediana

 - Primer paso: definir las fórmulas
 - Segundo paso: implementar las fórmulas en JavaScript
 - Tercer paso: crear funciones
 - Cuarto paso: integrar JavaScript con HTML

### ¿Qué es promedio, moda y mediana? 
Para este taller vamos aprender a calcular el promedio, la moda y la mediana con JavaScript. Estas son algunas herramientas matemáticas, exactamente de la estadística, para hacer cálculos y análisis en nuestra vida diaria.

### Promedio
También podemos llamar **media aritmética**. Es importante resaltar que existen varios tipos de promedios, como la media geométrica, media armónica, el promedio de promedios, etc... 

Para calcular la media aritmética solo debemos de sumar nuestro conjunto de números y esta suma la dividimos entre la cantidad de números que hay en nuestra lista: `(num1 + num2 + num3) / 3`

Un caso de uso podría ser calcular el promedio de ventas de un vendedor. Pero la media aritmética no nos sirve cuando un solo valor atípico sesga la media en gran medida, por ejemplo: `($500 + $750 + $400 + 450 + 1,000,000) / 5`.  Para estos casos usamos la **mediana**. 

### Mediana 
Esta herramienta es mucho más acertada porque por en la forma en que la calculamos no nos va a dar un resultado que se vea tan afectado por una cantidad de elementos tan chiquita. 

Para calcular la mediana debemos de ordenar nuestra lista de elementos de menor a mayor y encontrar el elemento que esta justo en la mitad, y ese sería nuestro resultado. Pero, cuando tenemos una lista con una cantidad de elementos par, los elementos de la mitad sería 2. Para este caso, sacamos el promedio entre los dos números de la mitad. 

### Moda
La moda, en sencillas palabras, es el elemento que más se repite en una lista. `1, 10, 14, 3, 24, 14, 10, 35, 13, 14` La moda en este caso sería 14.

Ventajas de usar la moda:

 - Puede haber más de dos números que se repitan la misma cantidad de veces
 - Los elementos en nuestra lista no necesariamente deben de ser números. 

 ## Taller #4: Análisis salarial
En este taller vamos a poner en práctica todo lo que aprendimos en los talleres anteriores. 

Para empezar vamos a tener una lista de personas por cada país. A cada una de estas personas las crearemos como un objeto, y estos objetos tendrán como atributo el salario de la persona. Además podremos agregarle más atributos.

En nuestro análisis tendremos un total del dinero completo de "ingresos mensuales fijos en el país",  el promedio de ingresos fijos y también la mediana de estos ingresos. 

Además, vamos a separar a las personas del top 10% para comparar cuanto ganan las personas en general y cuanto ganan el top 10%