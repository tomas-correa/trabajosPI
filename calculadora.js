//sumar
function sumar (a,b){
    return a+b
}

//restar
function restar (a,b){
    return a-b
}

//multiplicar
function multiplicar (a,b){
    return a*b
}

//dividir
function dividir (a,b){
    return a/b
}

console.log("Testeando Operaciones/Calculadora")

console.log(sumar(45,88))
console.log(restar(71,14))
console.log(multiplicar(6,3))
console.log(dividir(34,2))
console.log(dividir(0,3))

//cuadrado
function cuadradoDeUnNumero(a){
        return multiplicar(a,a)
    }

console.log("PARTE 3")
console.log(cuadradoDeUnNumero(4))

//promedio de 3
function promedioDeTresNumeros(a,b,c){
    return dividir(sumar(sumar(a,b),c),3)
}

console.log(promedioDeTresNumeros(2,4,6))

//porcentaje

function calcularPorcentaje(a,b){
    return dividir(multiplicar(b,a),100)
}
console.log(calcularPorcentaje(300,15))

//generador porcentaje
function generadorDePorcentaje(a,b){
    return  dividir(multiplicar(100,a),b) +"%"
}
console.log(generadorDePorcentaje(2,200))
console.log(generadorDePorcentaje(50,200))





