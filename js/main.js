let form = document.querySelector('form');
let input = form.querySelector('input');
let tasksDiv = document.getElementById('tasks');
let DoneButton = document.querySelector('#btnbot button:first-child');

// section "add" une tache
form.addEventListener('submit', function(event) {
    event.preventDefault(); // pour eviter que la page se rafraichisse parce que c'est un form

    let taskText = input.value;

    // Création de la div tâche
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    // Petit bouton rond pour sélectionner
    let selectButton = document.createElement('button');
    selectButton.classList.add('select-button');
    selectButton.textContent = "○"; 

    // on dis ce qui arrive quand on clique sur le bouton "o"
    selectButton.addEventListener('click', function(e) {
        e.preventDefault(); // pareil qu'au dessus, empeche le rafraichissement
        selectButton.classList.toggle('selected');
        if (selectButton.classList.contains('selected')) {
            selectButton.textContent = "●";
        } else {
            selectButton.textContent = "○";
        }        
    });

    // Texte de la tâche
    let taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Assemble la tâche
    taskDiv.appendChild(selectButton);
    taskDiv.appendChild(taskContent);

    tasksDiv.appendChild(taskDiv);

    input.value = "";
});

// pour le bouton "Done"
DoneButton.addEventListener('click', function() {
    let allTasks = document.querySelectorAll('.task');

    allTasks.forEach(task => {
        let selectButton = task.querySelector('.select-button');
        let taskContent = task.querySelector('span');

        if (selectButton.classList.contains('selected')) {
            taskContent.classList.toggle('done');
            selectButton.classList.remove('selected'); 
            selectButton.textContent = "○"; 
        }
    });
});
// gestion de supression de tache
let deleteButton = document.querySelector('#btnbot button:last-child'); // Cible le bouton "Supprimer"

deleteButton.addEventListener('click', function() {
    let allTasks = document.querySelectorAll('.task');

    allTasks.forEach(task => {
        let selectButton = task.querySelector('.select-button');

        if (selectButton.classList.contains('selected')) {
            task.remove(); // Supprime la tâche
        }
    });
});

// gestion de bouton modifier
let modifyButton = document.querySelector('#btnbot button:nth-child(2)'); 

let isModifying = false; 

modifyButton.addEventListener('click', function() {
    let selectedTask = null;
    let allTasks = document.querySelectorAll('.task');

    allTasks.forEach(task => {
        let selectButton = task.querySelector('.select-button');
        if (selectButton.classList.contains('selected')) {
            selectedTask = task;
        }
    });

    if (!selectedTask) return; // Si aucune sélection, on ne fait rien

    let taskContent = selectedTask.querySelector('span');

    if (!isModifying) {
        let currentText = taskContent.textContent;

        // on remplace le span par un input
        let inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = currentText;
        inputEdit.classList.add('edit-input');

        selectedTask.replaceChild(inputEdit, taskContent);

        modifyButton.textContent = "Confirmer";
        isModifying = true;
   