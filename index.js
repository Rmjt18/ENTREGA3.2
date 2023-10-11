const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",

    
  },
  
  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const h1=document.getElementById("h1")
const input=document.getElementById("input")
const buttonbuscar =document.getElementById("buscar")
const buttonnuevabusqueda =document.getElementById("nuevabusqueda")
const container =document.querySelector(".container")

// const h2 = document.createElement("h2")
// h2.innerHTML="la pizza que elegiste es exquisita"
// container.appendChild(h2)
// console.log(h2);

// const nuevabusqueda = () =>{
//   const h2 = document.querySelector("h2")
//   container.removeChild(h2)


// si esta vacio 
const isEmpty= (input) => {
  return !input.value.trim().length;
};
const checkInput = (input) => {
  console.log(isEmpty(input));
}



// funcion de error

const showError= (message) =>{
  container.innerHTML = message

}

const isbetween = (input,min,max) => {
  return input.value.length >= min && input.value.length <= max;
}





const buscarpizza = ()=>{
  if(input.value > pizzas.length || input.value < 0){
    showError('No existe el producto') 
    return
  }else if (input.value.length == 0){
    showError('Debe ingresar un valor')
    return
  }
  let pizzaFiltrada = pizzas.filter((pizza) => pizza.id == input.value)
  console.log(pizzaFiltrada)
} 


const init = () => {
buttonbuscar.addEventListener("click",buscarpizza)
buttonnuevabusqueda.addEventListener("click", nuevabusqueda )

}

init()

































// 👉 Les dejamos como archivo adjunto la base para realizar el ejercicio, en la cual tendrán el html y css vacíos , una carpeta img y el index.js que tendrá el nuevo array de pizzas, en donde cada pizza tendrá una propiedad imagen además de las propiedades que tenía en el ejercicio anterior.

// 👉 Crear un archivo HTML que tenga un input de tipo "number", un botón y un contenedor en el cual renderizar el resultado de la búsqueda que se haga. 

// 👉 Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) mediante el evento "submit" si están usando un formulario o bien el evento "click" si quieren manejarlo desde el botón.

// 👉 Si el número ingresado en el input es valido(existe una pizza cuyo id coincida con el número ingresado en el input), se deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input. La card deberá contener mínimamente el nombre, imagen y y precio de la pizza (Estilizarlo con CSS 🎨) 

// 🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
// 🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
// 🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. El resto del contenido de nuestro contenedor se deberá pisar por lo nuevo.

// El input y el botón no se debén pisar, ya que debemos poder seguir haciendo busquedas.

// ¿Cuál es el desafío final?

// Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página. No guardar en el localstorage en caso de que lo buscado haya generado un error, solamente persistir los datos cuando se haya encontrado una pizza.



