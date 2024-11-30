const form = document.querySelector("form");
const input = document.querySelector("input");
const todoList = document.querySelector("ul");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const doneSound = document.querySelector('.done-sound');
const deleteSound = document.querySelector('.delete-sound');
const clearSound = document.querySelector('.clear-sound');
const errorSound = document.querySelector(".error-sound");
const addSound = document.querySelector('.add-sound');
const doneSpan = document.querySelector(".done-span");
const deleteSpan = document.querySelector(".delete-span");
const clearSpan = document.querySelector(".clear-span");
const errorSpan = document.querySelector(".error-span");
const succesOverlay = document.querySelector(".succes-overlay");
const listArr = [];

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
    const todos = getTasksLS();
    todos.forEach((todo) => addTaskToUI(todo));
});

function addTaskToUI(text) {
    addSound.play();
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    listArr.push(todoItem);
    listArr.reverse();
    console.log(listArr);
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    const statusText = document.createElement("span");
    statusText.classList.add("status-text");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("done-btn");
    todoItem.append(text);
    for(let i = 0; i<listArr.length; i++){
        todoList.append(listArr[i]);
    }
    listArr.forEach((item,index) =>{
        if(item.classList.contains("done") || item.classList.contains("deleted")){
            item.remove();
        }
    })
    todoItem.append(btnDiv);
    btnDiv.append(statusText);
    btnDiv.append(doneBtn);
    btnDiv.append(deleteBtn);
    statusText.innerHTML = "Pending";
    langButn.addEventListener("click", () =>{
        if(currentLang === "en"){  
            statusText.innerHTML ="Pending";
        }
        else{
            statusText.innerHTML ="Gözləyir";    
        }
    });
    doneBtn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>`;
    deleteBtn.innerHTML = `<ion-icon name="trash-bin-outline"></ion-icon>`;
    deleteBtn.onclick = () => {
        deleteSound.play();
        todoItem.style.backgroundColor = "#e9493b6d";
        todoItem.style.border = "1px solid #ba3024";
        todoItem.classList.add("deleted");
        statusText.remove();
        statusText.style.color = "#ba3024";
        deleteSpan.classList.add("active");
        removeTask(text);
        setTimeout(() => {
            todoItem.remove();
            counter();
        }, 500);
        setTimeout(() => {
            deleteSpan.classList.remove("active");
        }, 800)
    };
    doneBtn.onclick = () => {
        doneSound.play();
        todoItem.style.backgroundColor = "#4aeb4a75";
        todoItem.style.border = "1px solid #289d28";
        todoItem.classList.add("done");
        statusText.remove();
        statusText.style.color = "#289d28";
        doneSpan.classList.add("active");
        succesOverlay.style.display = "flex";
        setTimeout(() => {
            removeTask(text);
            todoItem.remove();
            counter();
        }, 500);
        setTimeout(() => {
            doneSpan.classList.remove("active");
        }, 800);
        setTimeout(() => {
            succesOverlay.style.display = "none";
        }, 2000);
    };
    counter();
    input.value = "";
};

clearBtn.onclick = () => {
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
    }, 500);
    setTimeout(() => {
        clearSpan.classList.remove("active");
    }, 800)
    localStorage.removeItem("todos");
    listArr.length =0;
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
    }
    else {
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
        addSound.play();
        addTask(text);
        addTaskToUI(text);
        input.value = "";
    }
};
