// Local storage
const btn = document.getElementById("btn")
const nom = document.getElementById("nom");
const ape = document.getElementById("ape");
const eda = document.getElementById("eda");
const tel = document.getElementById("tel");
const cel = document.getElementById("cel");
const dir = document.getElementById("dir");

const Data = () => {
    let nombre = prompt("Ingresar nombre: ");
    nom.innerHTML = "Nombre: " + nombre;
    localStorage.setItem("name", nombre);

    let apellido = prompt("Ingresar apellido: ");
    ape.innerHTML = "Apellido: " + apellido;
    localStorage.setItem("lastName", apellido);

    let edad = prompt("Ingresar edad: ");
    eda.innerHTML = "Edad: " + edad;
    localStorage.setItem("age", edad);

    let telefono = prompt("Ingresar telefono: ");
    tel.innerHTML = "Telefono: " + telefono;
    localStorage.setItem("phone", telefono);

    let celular = prompt("Ingresar celular: ");
    cel.innerHTML = "Celular: " + celular;
    localStorage.setItem("CellPhone", celular);

    let direccion = prompt("Ingresar direccion: ");
    dir.innerHTML = "Direccion: " + direccion;
    localStorage.setItem("address", direccion);
}

if (localStorage.getItem("name") ||
    localStorage.getItem("lastName") ||
    localStorage.getItem("age") ||
    localStorage.getItem("phone") ||
    localStorage.getItem("CellPhone") ||
    localStorage.getItem("address")
) {
    nom.innerHTML = "Nombre: " + localStorage.getItem("name");
    ape.innerHTML = "Apellido: " + localStorage.getItem("lastName");
    eda.innerHTML = "Edad: " + localStorage.getItem("age");
    tel.innerHTML = "Telefono: " + localStorage.getItem("phone");
    cel.innerHTML = "Celular: " + localStorage.getItem("CellPhone");
    dir.innerHTML = "Direccion: " + localStorage.getItem("address");
}


btn.onclick = () => {
    Data();
}

