var nombre = prompt("hola, ingresa tu nombre");
var edad = prompt ("hola, ingresa tu presupuesto para tu tarjeta grafica");
switch (nombre) {
case "Oscar":
document.write("-Hola Oscar")
break;
case "Navi":
document.write("-Hola Navi");
break;
default:
document.write("-Hola "+nombre);
break;
}
if (edad >= 15000) {
document.write(" Bienvenido, puedes elegir una grafica");
} else{
document.write(" No cuentas con el presupuesto necesario, para adquirir una tarjeta grafica");
};

