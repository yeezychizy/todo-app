const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function() {
	if (taskInput.value === "") {
		alert("Please enter a task.");
	} else {
		const newTask = document.createElement("li");
		newTask.innerText = taskInput.value;
		taskList.appendChild(newTask);
		taskInput.value = "";
	}
});

taskList.addEventListener("click", function(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("completed");
	}
});
