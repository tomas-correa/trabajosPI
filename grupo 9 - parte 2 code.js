/*

!true == false
 !false  == true
 !!false == false
 !!true == true
 !1	== false				
 !!1 == true
 !0 == true
 !!0 == false
 !!"" ==  false
 
 let x = 5 ;
 let y = 9;

	(x < 10 && x!==5) = false
 	(x>9 || x===5) = true        
 	!(x===y) = true 						 								
let x=10 
let y ="a"
 								
y==="b" || x >= 10 
Devuelve: true
 							
12. 							 								
	let x=3
let y=8
 								
	!(x == "3" || x === y) && !(y !== 8 && x <= y)
false && true
Devuelve: false							
13. 						 								
	let str=""
	 let msj = "jaja!"
 	let esGracioso = “false”
	 !((str || msj) && esGracioso) 



Crear el código JS que exprese los siguientes enunciados:
1. Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
debe ser mayor a 1,30 m.
2. Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
debe usar el flash.
3. Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
parciales, o si obtiene un 4 en el examen final.
4. Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus
prácticas de piano y lo hizo de memoria.*/

let edad=13
let altura=1.4

console.log(edad>12 && altura>1.3)

let luz=true
let rapido=true

console.log (luz!=true || rapido == true)

let parcial1 = 8
let parcial2 = 5
let final = 3

console.log ((parcial1 > 7 && parcial2 > 7) || final >=4)

let tarea=1
let piano=1
let memoria=1

console.log (Boolean(tarea && piano && memoria))
