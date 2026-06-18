const form =
document.getElementById("taskForm");

const input =
document.getElementById("taskInput");

const category =
document.getElementById("category");

const searchTask =
document.getElementById("searchTask");

const filterCategory =
document.getElementById("filterCategory");

const clearAll =
document.getElementById("clearAll");

const propertyValue =
document.getElementById("propertyValue");

const attributeValue =
document.getElementById("attributeValue");



document.addEventListener(
"DOMContentLoaded",
loadStoredTasks
);

function loadStoredTasks(){

const tasks = loadTasks();

const fragment =
document.createDocumentFragment();

tasks.forEach(task=>{

const card =
createTask(
task.task,
task.category
);

card.dataset.status =
task.status;

fragment.append(card);

});

taskContainer.append(fragment);

updateStats();
}



form.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const taskName =
input.value.trim();

if(!taskName) return;

const task =
createTask(
taskName,
category.value
);

taskContainer.prepend(task);

saveTask(
taskName,
category.value
);

updateStats();

form.reset();

}
);


taskContainer.addEventListener(
"click",
(e)=>{

const card =
e.target.closest(".task-card");

if(!card) return;

if(
e.target.classList.contains(
"delete-btn"
)
){

card.remove();
updateStats();

}

if(
e.target.classList.contains(
"complete-btn"
)
){

card.dataset.status =
card.dataset.status ===
"completed"
?
"pending"
:
"completed";

card.classList.toggle(
"completed"
);

updateStats();

}

if(
e.target.classList.contains(
"edit-btn"
)
){

const title =
card.querySelector("h3");

const updated =
prompt(
"Edit Task",
title.textContent
);

if(updated){

const newTitle =
document.createElement("h3");

newTitle.textContent =
updated;

title.replaceWith(
newTitle
);

}

}

}
);



searchTask.addEventListener(
"input",
()=>{

const keyword =
searchTask.value
.toLowerCase();

document
.querySelectorAll(".task-card")
.forEach(card=>{

const text =
card.querySelector("h3")
.textContent
.toLowerCase();

card.style.display =
text.includes(keyword)
?
"block"
:
"none";

});

}
);



filterCategory.addEventListener(
"change",
()=>{

const selected =
filterCategory.value;

document
.querySelectorAll(".task-card")
.forEach(card=>{

const category =
card.dataset.category;

card.style.display =
selected==="all" ||
selected===category
?
"block"
:
"none";

});

}
);



clearAll.addEventListener(
"click",
()=>{

if(
confirm(
"Delete all tasks?"
)
){

taskContainer.innerHTML="";

localStorage.removeItem(
"tasks"
);

updateStats();

}

}
);



function updateStats(){

const total =
document.querySelectorAll(
".task-card"
).length;

const completed =
document.querySelectorAll(
'.task-card[data-status="completed"]'
).length;

document.getElementById(
"totalTasks"
).textContent =
total;

document.getElementById(
"completedTasks"
).textContent =
completed;

document.getElementById(
"pendingTasks"
).textContent =
total-completed;

}