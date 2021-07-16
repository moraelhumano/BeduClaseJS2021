const hora = new Date().getHours();
let saludo;
if (hora < 10) {
  saludo = "Buenos días";
} else if (hora < 20) {
  saludo = "Buenas tardes";
} else {
  saludo = "Buenas noches";
}

console.log(saludo)


const coleccion = ["Civil war", "Sandman 01", "Watchmen", "Scott Pilgrim 01", "Batman: Arkham", "Preacher"];

let comic = "";
for (let i = 0; i < coleccion.length; i++) {
  comic += coleccion[i] + "<br>" ;
}

document.getElementById("contenedor").innerHTML = comic;


console.log(comic);



