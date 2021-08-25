//Convierte pulgadas en cm
function pulgada(a){
    let c= a*2.54;
    return c;
}
console.log(pulgada(3));

//Devuelve una url a partir de un string
function url(q){
   // let w=(`http://www.${q}.com`)
    let w=("http://www."+q+".com")
    return w;
}
console.log(url('danimartinez'));

//Función que devuelve admiración en el string
function admirada(p){
    let t=(p+"!");
    return t;
}
console.log(admirada('mi mamá me mima'))

//Calcula la edad de mi perro
function edadPerro(e){
    let r=e*7;
    return r;
}
console.log(edadPerro(28))

//Valor de hora de trabajo
function sueldoHora(sueldo){
    let d= sueldo/40;
    return d;
}
console.log(sueldoHora(100000))

//Calcula el IMC
function imc(h,p){
    let g=p/(h*h);
    return g;
}
console.log(imc(1.49,55))

//Convierte en MAYUSCULA
function convierteMay(w){
    t =w.toUpperCase()
    return t
}
console.log(convierteMay('hola chicos'))

//Tipo de dato
function tipoDato(f){
    t =typeof(f)
    return t
}
console.log(tipoDato('hola chicos'))
console.log(tipoDato(30))

//Devuelve circunferencia de un circulo
function circunf(y){
    let h=Math.PI*y**2;
    return  h
}
console.log(circunf(2))
