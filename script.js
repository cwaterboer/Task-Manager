document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const searchInput = document.getElementById('searchInput');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask();
    });

    searchInput.addEventListener('input', function () {
        searchTasks(this.value);
    });

    function addTask() {
        const taskTitle = document.getElementById('taskTitle').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskPriority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('dueDate').value;

        if (taskTitle && taskDescription) {
            const task = { title: taskTitle, description: taskDescription, priority: taskPriority, dueDate: dueDate };
            createTask(task);
            clearForm();
        }
    }

    function createTask(task) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task.title}</span>
            <span>${task.description}</span>
            <span>Priority: ${task.priority}</span>
            <span>Due Date: ${task.dueDate}</span>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="completeTask(this)">Complete</button>
        `;
        taskList.appendChild(listItem);
    }

    window.deleteTask = function (button) {
        const listItem = button.parentElement;
        listItem.remove();
    }

    window.editTask = function (button) {
        const listItem = button.parentElement;
        const taskTitle = listItem.querySelector('span').innerText;
        const taskDescription = listItem.querySelector('span:nth-child(2)').innerText;
        const taskPriority = listItem.querySelector('span:nth-child(3)').innerText.split(':')[1].trim();
        const dueDate = listItem.querySelector('span:nth-child(4)').innerText.split(':')[1].trim();

        document.getElementById('taskTitle').value = taskTitle;
        document.getElementById('taskDescription').value = taskDescription;
        document.getElementById('taskPriority').value = taskPriority;
        document.getElementById('dueDate').value = dueDate;

        listItem.remove();
    }

    window.completeTask = function (button) {
        const listItem = button.parentElement;
        listItem.classList.toggle('completed');
    }

    function clearForm() {
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskPriority').value = 'Low';
        document.getElementById('dueDate').value = '';
    }

    function searchTasks(keyword) {
        const allTasks = taskList.querySelectorAll('li');
        allTasks.forEach(task => {
            const title = task.querySelector('span').innerText.toLowerCase();
            const description = task.querySelector('span:nth-child(2)').innerText.toLowerCase();
            if (title.includes(keyword.toLowerCase()) || description.includes(keyword.toLowerCase())) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }
});
