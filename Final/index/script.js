// 1. Select the elements from the HTML
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 2. Create a function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new 'li' element (list item)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button for the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');

    // Add an event listener to delete the task when clicked
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the main unordered list
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";
}

// 3. Attach the addTask function to the button click
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
