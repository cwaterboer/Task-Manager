document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask();
    });

    // Function to add a task
    function addTask() {
        const taskTitle = document.getElementById('taskTitle').value;
        const taskDescription = document.getElementById('taskDescription').value;

        if (taskTitle && taskDescription) {
            const task = { title: taskTitle, description: taskDescription };
            createTask(task);
            clearForm();
        }
    }

    // Function to create a task
    // Function to create a task
function createTask(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${task.title}</span>
        <span>${task.description}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(listItem);

    // Function to delete a task
    window.deleteTask = function (button) {
        const listItem = button.parentElement;
        listItem.remove();
    }

    // Function to clear the form
    function clearForm() {
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
    }
});
