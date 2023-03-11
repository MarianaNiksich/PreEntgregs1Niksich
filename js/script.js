function radiacion(Kv, mAS) {
    alert("La dosis de radiación recomendada es " + Kv + "Kv y " + mAS + "mAs")
}

let menu = "Seleccione una parte del cuerpo a radiografiar\n1- Cráneo\n2- Columna cervical\n3- Columna dorsal\n4- Columna lumbar\n5- Sacro\n6- Pelvis\n7- Femur\n8- Pierna\n9- Pie\n10- Brazo\n11- Antebrazo\n12- Mano\n0- Para salir"

let salir = 0

do {
    alert(menu)
    opcion = Number(prompt("Ingrese una opcion"))
    if (opcion === 1) {
        radiacion(80, 18)
        break
    } else if (opcion === 2) {
        radiacion(75, 10)
        break
    } else if (opcion === 3) {
        radiacion(80, 12)
        break
    } else if (opcion === 4) {
        radiacion(80, 15)
        break
    } else if (opcion === 5) {
        radiacion(80, 15)
        break
    } else if (opcion === 6) {
        radiacion(80, 15)
        break
    } else if (opcion === 7) {
        radiacion(75, 12)
        break
    } else if (opcion === 8) {
        radiacion(70, 6)
        break
    } else if (opcion === 9) {
        radiacion(70, 2)
        break
    } else if (opcion === 10) {
        radiacion(70, 6)
        break
    } else if (opcion === 11) {
        radiacion(62, 6)
        break
    } else if (opcion === 12) {
        radiacion(62, 3)
        break
    }
} while (opcion != 0)