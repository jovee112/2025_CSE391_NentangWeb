document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Vui lòng nhập công việc.');
    return;
  }

  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-button">Xóa</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';

  saveTasksToLocalStorage();
}

document.getElementById('taskList').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
    saveTasksToLocalStorage();
  } else if (event.target.tagName === 'SPAN') {
    event.target.classList.toggle('completed');
    saveTasksToLocalStorage();
  }
});

function saveTasksToLocalStorage() {
  const tasks = [];
  document.querySelectorAll('#taskList li').forEach(taskItem => {
    tasks.push({
      text: taskItem.querySelector('span').textContent,
      completed: taskItem.querySelector('span').classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button class="delete-button">Xóa</button>
    `;
    document.getElementById('taskList').appendChild(taskItem);
  });
}

document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);