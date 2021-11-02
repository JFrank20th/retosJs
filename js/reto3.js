let ingreso = prompt("Ingrese la palabra:").toLocaleLowerCase();

switch (ingreso) {
    case "casa":
        alert("House")
        break;

    case "mesa":
        alert("Table")
        break;

    case "perro":
        alert("Dog")
        break;

    case "gato":
        alert("Cat")
        break;

    default:
        alert("la pabra no existe")
        break;
}