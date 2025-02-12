const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('tarefa');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim(); 
    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="remove-btn">Remover</button>
    `;
    
    const removeButton = li.querySelector('.remove-btn');

    removeButton.addEventListener('click', () => {
        taskList.removeChild(li); 
    });

    taskList.appendChild(li);

    taskInput.value = "";
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
