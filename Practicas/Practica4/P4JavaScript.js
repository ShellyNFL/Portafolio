//EJERCICIO 1 CLASIFICAR LA CALIFICACION RECIBIDA
function evaluar(){
    grade = document.getElementById("cali").value;

    switch (true) {
        case (grade >= 0 && grade < 6):
            equivalence = 'NA';
            break;
        case (grade >= 6 && grade < 7.5):
            equivalence = 'S';
            break;
        case (grade >= 7.5 && grade < 9):
            equivalence = 'B';
            break;
        case (grade >= 9 && grade < 10):
            equivalence = 'MB';
            break;
        case (grade == 10):
            equivalence = 'LAP';
            break;
        default:
            equivalence = 'Calificacion no válida';   
        }
        document.getElementById("r1").innerHTML = equivalence;

}

//EJERCICIO DOS, FUNCION QUE SAQUE EL FACTORIAL DE MANERA RECURSIVA
function leer(){
    //sin el value nos trae al apuntador del objeto 
    valor = document.getElementById("factorialRecursivo").value;
    //parse es el cast
    var numero = parseInt(valor);
    console.log(numero); //imprime en consola

    //Llamada a la función factorial
    resultado= factorialRecursivo(numero);
    if (resultado === -1) {
        document.getElementById("r2").innerHTML = "Factorial no está definido";
    } else {
        var salida = numero + "! = " + resultado;
        document.getElementById("r2").innerHTML = salida;
    }

}

function factorialRecursivo(numero){
    if(numero == 0){
        return 1;
    }else if(numero<0){
        return -1;
    }else{
        return numero*factorialRecursivo(numero-1);
    }  
}

//EJERCICIO 3 OBTENER Y JUNTAR LA INFORMACIÓN  DEL FORMULARIO 
function formulario(){
    datos = "Tu información es la siguiente: ";
    datos = document.getElementById("name").value;
    datos += " con "+ document.getElementById("age").value + " años de edad \n";
    datos += "su email es " + document.getElementById("email").value;
    datos += " su genero es ";
    switch(true){
        case document.getElementById("female").checked:
            datos += "femenino. \n";
            break;
        case document.getElementById("male").checked:
            datos+= "masculino. \n";
            break;
        default:
            datos+="no binario. \n";  
    }
    datos += "Nació en: " + document.getElementById("birthdate").value;
    datos += " y su color favorito es: " +  document.getElementById("favcolor").value;

    document.getElementById("r3").innerHTML = datos;
}





