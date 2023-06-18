window.alert('Bienvenidos a nuestro calculador de promedios!')
prompt('Ingrese su nombre para comenzar!')

function calcularPromedio() {
    alert("Calcular promedio de notas")
let nota1, nota2, nota3;
        nota1 = prompt('Ingrese 1ra. nota:');
        nota2 = prompt('Ingrese 2da. nota:');
        nota3 = prompt('Ingrese 3ra. nota:');

        nota1 = parseInt(nota1);
        nota2 = parseInt(nota2);
        nota3 = parseInt(nota3);
        let pro;
        pro = (nota1 + nota2 + nota3) / 3;
        if (pro >= 7) {
            document.write('Felicitaciones, estas promocionado :)');
        } else {
            if (pro >= 4) {
                document.write('Tu promedio es regular!');
            } else {
                document.write('Lo siento, estás reprobado :(');
            }
        }

}
       
            








