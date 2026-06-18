function saveTask(task, category) {

    let tasks =
    JSON.parse(localStorage.getItem("tasks"))
    || [];

    tasks.push({
        id: Date.now(),
        task,
        category,
        status:"pending"
    });

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function loadTasks() {

    return JSON.parse(
        localStorage.getItem("tasks")
    ) || [];
}