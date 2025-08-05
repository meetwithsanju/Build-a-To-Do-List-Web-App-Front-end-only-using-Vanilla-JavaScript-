// This are DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Performing task on click botton
addBtn.addEventListener('click', addTask);

// Also add task on Enter key
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Creating list item
  const li = document.createElement('li');
  li.className = 'task';

  // Set inner content
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">&times;</button>
  `;

  // Addig event to toggle completion
  li.querySelector('.task-text').addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Adding event to delete task
  li.querySelector('.delete-btn').addEventListener('click', function () {
    taskList.removeChild(li);
  });

  // Append to list and reset input
  taskList.appendChild(li);
  taskInput.value = '';
}
