let addTareaButton = document.getElementById("add-task-button");
let listaTareas = document.querySelector('#task-list');
let inputTareas = document.getElementById('input-task');

let tareas = [

    //Objetos Tareas
];
addTareaButton.onclick = addTask;


if (localStorage.getItem("tasks")) {
    tareas = JSON.parse(localStorage.getItem("tasks"));
    tareasEnPantalla();
}


function addTask() {

    let newTask = {
       listaTareas: inputTareas.value,
        checked: false
    }
    tareas.push(newTask);
    tareasEnPantalla();
   localStorage.setItem("tasks", JSON.stringify(tareas));
}

// Faltaria crear una funcion para que al borrar desde la papelera se actualice el localStorage

function tareasEnPantalla(){
    let nombreTarea = '';
    tareas.forEach(function (item){
        document.getElementById("input-task").value = '';
        nombreTarea += `
        <li>
        <input type="checkbox" ${item.checked ? 'checked' : ''}>
        <span class="task">${item.listaTareas}</span>
        <button id="borrar" class="delete-btn fa fa-trash-o" onclick="return this.parentNode.remove();"></button> 
        </li>
        `;
        listaTareas.innerHTML = nombreTarea;
        });
}
let borrarLocal = document.getElementById('clear');
borrarLocal.onclick = clearAll;
function clearAll() {
    localStorage.clear();
    while (listaTareas.firstChild) {
        listaTareas.removeChild(listaTareas.firstChild);
    }
}


