let nombre = ["Lautaro"]
let apellido = ["Muiño"]

const obj = {
    nombre: "Lautaro",
    apellido: "Muiño"
}

sessionStorage.setItem("obj-sesion", "Lautaro Muiño")

localStorage.setItem("objeto", "Lautaro Muiño")

document.cookie = "NombreCookie=Lautarocookie"
document.cookie = "nombrecaducidad=nombre;expires=" + new Date("March 29, 2023, 13:42:00").toUTCString()
console.log(document.cookie)

