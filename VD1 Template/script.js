let tasks = [];

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    }
}

function addTaskToDOM(taskObj) {
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.textContent = taskObj.text;
    newTask.style.textDecoration = taskObj.isDone ? "line-through" : "none";
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(newTask);
        tasks = tasks.filter(task => task.id !== taskObj.id);
        saveTasksToLocalStorage();
    });
    newTask.addEventListener("click", function() {
        taskObj.isDone = !taskObj.isDone;
        newTask.style.textDecoration = taskObj.isDone ? "line-through" : "none";
        saveTasksToLocalStorage();
    });
    var editBtn = document.createElement("button");
    editBtn.textContent = "Chỉnh sửa";
    editBtn.addEventListener("click", function() {
        var newText = prompt("Chỉnh sửa công việc:", taskObj.text);
        if (newText !== null && newText.trim() !== "") {
            taskObj.text = newText.trim();
            newTask.textContent = taskObj.text;
            newTask.appendChild(deleteBtn);
            newTask.appendChild(editBtn);
            saveTasksToLocalStorage();
        }
    });

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const taskObj = {
            id: Date.now(),
            text: taskValue,
            isDone: false
        };
        tasks.push(taskObj);
        addTaskToDOM(taskObj);
        saveTasksToLocalStorage();

        // Xóa nội dung input sau khi thêm công việc
        taskInput.value = "";
    } else {
        alert("Vui lòng nhập nội dung công việc!");
    }
}

document.getElementById("addBtn").addEventListener("click", addTask);

// Tải danh sách công việc từ localStorage khi trang được tải lại
window.addEventListener("load", loadTasksFromLocalStorage);