//tr es para un renglón
//td es para una celda individual dentro del renglón
//th es el header
var estilo = 0;
var fila = "<tr><th>Comprador</th><th>Contacto</th><th>Paquete</th><th>Flor</th><th>Entrega deseada</th><th>Envoltura</th><th>Cuteness</th>"
function registrar(){
    if(document.querySelector("input[name=name]").value == '')
        alert("Nombre vacío, llena todos los campos");
    else if(document.querySelector("input[name = email]").value == '')
        alert("Email vacío, llena todos los campos");
    else if(document.querySelectorAll("input[name=paquete]:checked").length == 0)
        alert("Seleccione al menos un paquete");
    else if(document.querySelector("input[name=tipoFlor]:checked")== null)
        alert("Seleccione un tipo de flor");
    else if(document.querySelector("input[name=fecha]").value == '')
        alert("Fecha vacía, llena todos los campos"); 
    else{
        var titulo= "<h2>Confirmación del paquete</h2><br>"

        //comenzamos con el diseño intercalado en la tabla

        if(estilo%2 == 0)
            fila += "<tr class=\"renglon1\">";
        else
            fila += "<tr class=\"renglon2\">";

        
        //Código para insertar la información en un renglón de la tabla
        
        x = document.getElementById("nombre").value;//nombre
        fila += "<td>" + x + "</td>";

        x = document.getElementById("email").value;//email
        fila += "<td>" + x + "</td>";

        fila += "<td>"; //checkbox paquete regresa lista con las opciones seleccionadas
            iterable = document.querySelectorAll("input[name=paquete]:checked");
            for(i of iterable)
                fila += i.value + "<br>";
        fila += "</td>";

        x = document.querySelector("input[name=tipoFlor]:checked").value;//radio flor
        fila += "<td>" + x + "</td>";

        x = document.getElementById("fecha"); //fecha
        fila += "<td>" + x.value + "</td>";

        x = document.getElementById("color").value; //color
        fila += "<td>" + x + "</td>";

        x = document.getElementById("tierno"); //que tan tierno
        fila += "<td>" + x.value + "</td>";

        fila += "</tr>";
        document.getElementById("confirmacion").innerHTML = titulo;
        document.getElementById("pedido").innerHTML = fila;

        //Limpiamos los campos
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";

        document.getElementById("docena").checked = false;
        document.getElementById("cincuenta").checked = false;
        document.getElementById("ciento").checked = false;

        document.getElementById("rosa").checked = false;
        document.getElementById("peonia").checked = false;
        document.getElementById("clavel").checked = false;

        document.getElementById("fecha").value = "";
        document.getElementById("color").value = '#000000';
        document.getElementById("tierno").value =100;

        //Se alterna el estilo de los renglones
        estilo ++;

    }

}