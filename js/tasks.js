const taskContainer =
document.getElementById("taskContainer");

function createTask(taskName, category) {

    const card =
    document.createElement("div");

    card.classList.add("task-card");

    card.setAttribute(
        "data-id",
        Date.now()
    );

    card.setAttribute(
        "data-status",
        "pending"
    );

    card.setAttribute(
        "data-category",
        category
    );

    const title =
    document.createElement("h3");

    title.appendChild(
        document.createTextNode(taskName)
    );

    const cat =
    document.createElement("p");

    cat.textContent = category;

    const editBtn =
    document.createElement("button");

    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    const completeBtn =
    document.createElement("button");

    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    const deleteBtn =
    document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    card.append(
        title,
        cat,
        editBtn,
        completeBtn,
        deleteBtn
    );

    return card;
}