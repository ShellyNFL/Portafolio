var taskArray = []; // Array para almacenar las tareas

function agrega() {
    let taskText = document.getElementById('nuevaTarea').value;
    if (taskText === '') {
        alert('Escribe una tarea.');
        return;
    }
    taskArray.push({ text: taskText, completado: false });
    imprimeLista();
    //Después de que escribe el usuario, limpio el input 
    document.getElementById('nuevaTarea').value = '';
}

//función que accede al arreglo de tareas y lo imprime con el formato para crear la tabla
function imprimeLista() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    //le pongo label para poder hacer clic en el texto
    taskArray.forEach((task, index) => {
        let taskItem = '<li>' +
                        '<label>' +
                            '<input type="checkbox" onclick="cambiaEstado(' + index + ')" ' + (task.completado ? 'checked' : '') + '>' +
                       '    <span class="' + (task.completado ? 'completado' : '') + '">' + task.text + '</span>' +
                        '</label>' +
                        '</li>';
        taskList.innerHTML += taskItem;
    });
}

//esta función cambia el estado de una tarea entre completado y no completado
//o sea checked o no checked
function cambiaEstado(index) {
    // Alterna el estado completado de la tarea
    taskArray[index].completado = !taskArray[index].completado;
    imprimeLista();
}

function borra() {
    taskArray = [];
    imprimeLista();
}

/*------------------------------------------REFERENCIAS-------------------------------------------
¿Qué son los objetos? - Javascript en español. (n.d.). Lenguaje JS.
 https://lenguajejs.com/javascript/objetos/que-son/

Trabajando con objetos - JavaScript | MDN. (n.d.). MDN Web Docs. 
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects
 */



