let form = document.querySelector('form');
let input = form.querySelector('input');
let tasksDiv = document.getElementById('tasks');
let globalDoneButton = document.querySelector('#btnbot button:first-child');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let taskText = input.value.trim();
    if (taskText === "") return;

    
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    
    let selectButton = document.createElement('button');
    selectButton.classList.add('select-button');
    selectButton.textContent = "○"; // cercle vide

    
    selectButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        selectButton.classList.toggle('selected');
        selectButton.textContent = selectButton.classList.contains('selected') ? "●" : "○"; // cercle plein ou vide
    });

    