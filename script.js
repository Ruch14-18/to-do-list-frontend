const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    createTask(taskText);
    taskInput.value = "";
});

// Create task function
function createTask(text) {
    const li = document.createElement("li");

    // Task text span
    const span = document.createElement("span");
    span.textContent = text;

    // Toggle complete
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
}
