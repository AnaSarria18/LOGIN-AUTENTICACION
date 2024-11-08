/* requiere indica que es una variable */
const express = require("express");


/* crear un objeto de la clase express */
const app = express();

/* configuracion de puerto */
const port= 3000;

app.get('/',(req, res)=>{
    res.send('Hola Mundo');
})

/* metodo sumando  */
app.get('/suma',(req, res)=>{
    let suma = 10 +20;
    res.send(`la suma de 10 y 20 es: ${suma}`);
});

 /* metodo restar */
app.get('/restar',(req, res)=>{
    let restar = 20 - 10;
    res.send(`la resta de 10 y 20 es: ${restar}`);
});


/* metodo multiplicar */
app.get('/multiplicar',(req, res)=>{
    let multiplicar = 10 * 20;
    res.send(`la multiplicacion de 10 y 20 es: ${multiplicar}`);
});


/* metodo dividir */
app.get('/dividir',(req, res)=>{
    let dividir = 10 / 20;
    res.send(`la division de 10 y 20 es: ${dividir}`);
});




app.listen(port, () => {
    console.log('servidor corriendo en el puerto http://localhost:${port}');
});




//Ejercicio 2 Arreglo de personas

let Personas = [{"nombre":"Samara", "apellido":"Ruiz", "cedula":156235}, 
                {"nombre":"Alejandro", "apellido":"Paja", "cedula":1025634}, 
                {"nombre":"Katherine", "apellido":"Vasquez", "cedula":1059625},
                {"nombre":"Maribel", "apellido":"Arce", "cedula":254596},
                {"nombre":"Victoria", "apellido":"Hiles", "cedula":1423650}]


/* metodo get para imprimir */
app.get('/imprimir',(req, res)=>{
    res.json(Personas);
});


/* metodo agregar una persona */
app.get('/agregar',(req, res)=>{
    Personas.push({"nombre":"Danna", "apellido":"Solarte", "cedula":10284});
    res.json(Personas);
});


/* metodo actualizar una persona */
app.get('/actualizar',(req, res)=>{
   Personas[5]= {"nombre":"Danna Yanet", "apellido":"Rios", "cedula":5644}
    res.json(Personas);
});

app.get('/eliminar',(req, res)=>{
    Personas.splice(5,1)
     res.json(Personas);
 });