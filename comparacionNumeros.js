let numero1 = prompt("Ingresa el primer numero:");
let numero2 = prompt("Ingresa el segundo numero:");
let numero3 = prompt("Ingresa el tercer numero:")

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3)

let mayor
let intermedio
let menor

if (numero1 == numero2 && numero2 == numero3) {
    console.log("Los tres números son iguales: " + numero1 + ", " + numero2 + ", " + numero3)
} else {
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
        if (numero2 >= numero3) {
            intermedio = numero2;
            menor = numero3
        } else {
            intermedio = numero3;
            menor = numero2
        }
    }

    if (numero2 > numero1 && numero2 >= numero3) {
        mayor = numero2;
        if (numero1 >= numero3) {
            intermedio = numero1;
            menor = numero3
        } else {
            intermedio = numero3;
            menor = numero1
        }
    }

    if (numero3 > numero1 && numero3 > numero2) {
        mayor = numero3;
        if (numero1 >= numero2) {
            intermedio = numero1;
            menor = numero2;
        } else {
            intermedio = numero2;
            menor = numero1
        }
    }

    console.log(`De mayor a menor: ${mayor} , ${intermedio} , ${menor} `)

    console.log(`De menor a mayor: ${menor} , ${intermedio} , ${mayor} `)
}