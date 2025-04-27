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

