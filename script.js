document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskBtn = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');

    function addTask() {
        const taskValue = taskInput.value.trim();
        if (taskValue === '') return;

        const li = document.createElement('li');
        li.textContent = taskValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            tasksList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        tasksList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') addTask();
    });
});