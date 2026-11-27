
/*3. Dentro de app.js, escribe: console.log("app.js conectado"); */
console.log("app.js conectado")

/*4. En app.js, selecciona tu <header> con querySelector y guárdalo en una variable. */
const header = document.querySelector("#encabezado")

/*5. Selecciona todas tus tarjetas o elementos repetidos (por ejemplo, .tarjeta) con querySelectorAll. */
const tarjetas = document.querySelectorAll(".tarjeta")


/*6. Con console.log(), comprueba en la consola cuántos elementos ha encontrado querySelectorAll (propiedad .length). */
console.log(`${tarjetas.length}`)

/*7. Selecciona el <h1> de tu página de Inicio y cambia su texto con textContent (puedes poner un botón que haga la llamada a la función). */
let h1 = document.querySelector(".titulo")

h1.addEventListener("click",cambiaTitulo)

function cambiaTitulo(){
    h1.textContent="Has cambiado el título"
}

let botonTarjeta = document.querySelectorAll("button")

botonTarjeta.forEach(boton => {

    boton.addEventListener("click", (e)=>{
        boton.parentElement.classList.toggle("destacado")
    })
});