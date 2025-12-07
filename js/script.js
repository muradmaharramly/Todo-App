const form = document.querySelector("form");
const input = document.querySelector("input");
const todoList = document.querySelector("ul");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const doneSound = document.querySelector(".done-sound");
const deleteSound = document.querySelector(".delete-sound");
const clearSound = document.querySelector(".clear-sound");
const errorSound = document.querySelector(".error-sound");
const addSound = document.querySelector(".add-sound");
const doneSpan = document.querySelector(".done-span");
const deleteSpan = document.querySelector(".delete-span");
const clearSpan = document.querySelector(".clear-span");
const errorSpan = document.querySelector(".error-span");
const succesOverlay = document.querySelector(".succes-overlay");
const failOverlay = document.querySelector(".fail-overlay");
const clearOverlay = document.querySelector(".clear-overlay");
const listArr = [];
let doneCount = 0;
let todoToDelete = null;

const langButn = document.querySelector(".lang-btn");

function getTasksLS() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

function addTask(todo) {
    const todos = getTasksLS();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTask(todoText) {
    let todos = getTasksLS();
    todos = todos.filter((todo) => todo !== todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", () => {
    doneCount = parseInt(localStorage.getItem("DoneCount")) || 0;
    if (isNaN(doneCount)) {
        doneCount = 0;
        localStorage.setItem("DoneCount", doneCount);
    }
    const todos = getTasksLS();
    todos.forEach((todo) => addTaskToUI(todo, true));

    const btnYes = failOverlay.querySelector(".btn-yes");
    const btnNo = failOverlay.querySelector(".btn-no");

    btnYes.onclick = () => {
        if (todoToDelete) {
            deleteSound.play();
            todoToDelete.item.style.backgroundColor = "#e9493b6d";
            todoToDelete.item.style.border = "1px solid #ba3024";
            todoToDelete.item.classList.add("deleted");
            deleteSpan.classList.add("active");
            removeTask(todoToDelete.text);

            setTimeout(() => {
                todoToDelete.item.remove();
                counter();
                updateIndexes();
                todoToDelete = null;
            }, 500);

            setTimeout(() => {
                deleteSpan.classList.remove("active");
            }, 800);
        }
        failOverlay.style.display = "none";
    };

    btnNo.onclick = () => {
        todoToDelete = null;
        failOverlay.style.display = "none";
    };

    const clearYes = clearOverlay.querySelector(".btn-yes");
    const clearNo = clearOverlay.querySelector(".btn-no");

    clearYes.onclick = () => {
        clearSound.play();
        const tdItems = document.querySelectorAll(".todo-item");
        tdItems.forEach((item) => {
            item.classList.add("cleaned");
        });

        clearSpan.classList.add("active");

        setTimeout(() => {
            tdItems.forEach((item) => {
                item.classList.remove("cleaned");
                item.remove();
            });
            counter();
            updateIndexes();
        }, 500);

        setTimeout(() => {
            clearSpan.classList.remove("active");
        }, 800);

        localStorage.removeItem("todos");
        listArr.length = 0;
        clearOverlay.style.display = "none";
    };

    clearNo.onclick = () => {
        clearOverlay.style.display = "none";
    };
});

function updateIndexes() {
    const items = document.querySelectorAll(".todo-item");
    items.forEach((item, index) => {
        const indexDiv = item.querySelector(".index");
        if (indexDiv) {
            indexDiv.textContent = index + 1;
        }
    });
}

function addTaskToUI(text, isLoading = false) {
    if (!isLoading) {
        addSound.play();
    }
    
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.dataset.id = Date.now() + Math.random();

    const textContent = document.createElement("div");
    textContent.classList.add("text-content");

    const indexDiv = document.createElement("div");
    indexDiv.classList.add("index");

    const textSpan = document.createElement("span");
    textSpan.classList.add("todo-text");
    textSpan.textContent = text;

    textContent.append(indexDiv);
    textContent.append(textSpan);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    
    const statusIcon = document.createElement("span");
    statusIcon.classList.add("status-text");
    statusIcon.innerHTML = `<ion-icon name="time-outline"></ion-icon>`;
    
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("done-btn");
    doneBtn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>`;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<ion-icon name="trash-bin-outline"></ion-icon>`;

    btnDiv.append(statusIcon);
    btnDiv.append(doneBtn);
    btnDiv.append(deleteBtn);

    todoItem.append(textContent);
    todoItem.append(btnDiv);

    if (!isLoading) {
        listArr.unshift(todoItem);
        todoList.insertBefore(todoItem, todoList.firstChild);
    } else {
        todoList.append(todoItem);
    }

    deleteBtn.onclick = () => {
        todoToDelete = {
            item: todoItem,
            text: text,
            statusIcon: statusIcon
        };
        failOverlay.style.display = "flex";
    };

    doneBtn.onclick = () => {
        doneCount = parseInt(localStorage.getItem("DoneCount")) || 0;
        doneCount++;
        doneSound.play();
        todoItem.style.backgroundColor = "#4aeb4a75";
        todoItem.style.border = "1px solid #289d28";
        todoItem.classList.add("done");
        statusIcon.remove();
        doneSpan.classList.add("active");
        succesOverlay.style.display = "flex";

        setTimeout(() => {
            removeTask(text);
            todoItem.remove();
            counter();
            updateIndexes();
        }, 500);

        setTimeout(() => {
            doneSpan.classList.remove("active");
        }, 800);

        setTimeout(() => {
            succesOverlay.style.display = "none";
        }, 1000);

        localStorage.setItem("DoneCount", doneCount);
    };

    counter();
    updateIndexes();
    input.value = "";

    enableDragAndDrop();
}

clearBtn.onclick = () => {
    clearOverlay.style.display = "flex";
};

function counter() {
    let itemCount = 0;
    const items = document.querySelectorAll(".todo-item");
    const ItemCount = document.querySelector(".item-count");
    const empty = document.querySelector(".empty");
    const endContainer = document.querySelector(".container-ending");

    items.forEach(() => {
        itemCount++;
    });

    if (itemCount !== 0) {
        ItemCount.innerHTML = itemCount;
        endContainer.classList.add("active");
        empty.classList.add("blocked");
    } else {
        endContainer.classList.remove("active");
        empty.classList.remove("blocked");
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text === "") {
        errorSpan.classList.add("active");
        errorSound.play();
        setTimeout(() => {
            errorSpan.classList.remove("active");
        }, 800);
    } else {
        addTask(text);
        addTaskToUI(text);
        input.value = "";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".pre-loader");
    preloader.style.display = "flex";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
});

const imgNav = document.querySelector(".profile-nav");

function updateProfileImage() {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        imgNav.src = savedImage; 
    } else {
        imgNav.src = "https://i.pinimg.com/736x/11/27/cc/1127cc05230f856fc393ce699a1a1451.jpg"; 
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    updateProfileImage();
});

function enableDragAndDrop() {
    const items = document.querySelectorAll(".todo-item");

    items.forEach((item) => {
        item.setAttribute("draggable", "true");

        item.removeEventListener("dragstart", handleDragStart);
        item.removeEventListener("dragend", handleDragEnd);
        
        item.addEventListener("dragstart", handleDragStart);
        item.addEventListener("dragend", handleDragEnd);
    });

    todoList.removeEventListener("dragover", handleDragOver);
    todoList.addEventListener("dragover", handleDragOver);
}

function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.dataset.id);
    e.target.classList.add("dragging");
}

function handleDragEnd(e) {
    e.target.classList.remove("dragging");
    saveOrderToLocalStorage();
    updateIndexes();
}

function handleDragOver(e) {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    const afterElement = getDragAfterElement(todoList, e.clientY);

    if (afterElement == null) {
        todoList.appendChild(dragging);
    } else {
        todoList.insertBefore(dragging, afterElement);
    }
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".todo-item:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function saveOrderToLocalStorage() {
    const items = document.querySelectorAll(".todo-item");
    const newOrder = [];

    items.forEach((li) => {
        const todoText = li.querySelector(".todo-text");
        if (todoText) {
            newOrder.push(todoText.textContent.trim());
        }
    });

    localStorage.setItem("todos", JSON.stringify(newOrder));
}