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
const motivationalMessages = [
    "Great job! Keep pushing forward! 💪",
    "Another task down, you're unstoppable! 🚀",
    "You're making amazing progress! 🌟",
    "Every step counts. Well done! 👏",
    "You're on fire! Keep it up! 🔥",
    "Success is built on small victories like this! 🏆",
    "Look at you go! You're doing fantastic! 🌈",
    "Another win for the day! 🌟",
    "You're proving how capable you are! 💼",
    "Small steps lead to big achievements! 🌱"
];
const quotes = [
    "Rambodu qaqam ramboo!",
    "Ürəhnən qaqa ürəhnən!",
    "Mauqlidi qaqam Muaqlii!",
    "Teşekadı qaqam teşekaa!",
    "Cəld-cəld qaqa cəld-cəld!"
];
form.onsubmit = (e) => {
    e.preventDefault();

    const text = input.value;
    if (text === "" || text === " ") {
        errorSpan.classList.add("active");
        errorSound.play();
        setTimeout(() => {
            errorSpan.classList.remove("active");
        }, 800);
    }
    else {
        addSound.play();
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");

        const btnDiv = document.createElement("div");
        btnDiv.classList.add("btn-div");

        const statusText = document.createElement("span");
        statusText.classList.add("status-text");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");

        const doneBtn = document.createElement("button");
        doneBtn.classList.add("done-btn");

        todoItem.append(text);
        todoList.append(todoItem);
        todoItem.append(btnDiv);
        btnDiv.append(statusText);
        btnDiv.append(doneBtn);
        btnDiv.append(deleteBtn);

        statusText.innerHTML = "Pending";
        doneBtn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>`;
        deleteBtn.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;

        deleteBtn.onclick = () => {
            deleteSound.play();
            todoItem.style.backgroundColor = "#e9493b6d";
            todoItem.style.border = "1px solid #ba3024";
            todoItem.classList.add("deleted");
            statusText.remove();
            statusText.style.color = "#ba3024";
            deleteSpan.classList.add("active");
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
            const motivationArea = document.querySelector(".motivation-area");
            const motivationText = document.querySelector(".motivation-text");
            let lab = 0;
            let ind = Math.round(Math.random() * 10);
            if (ind < 10) {
                motivationArea.style.display = "block";
                motivationText.innerHTML = motivationalMessages[ind];
                lab++;
            }
            setTimeout(() => {
                todoItem.remove();
                counter();
            }, 500);
            setTimeout(() => {
                doneSpan.classList.remove("active");
            }, 800);
            setTimeout(() => {
                motivationArea.style.display = "none";
            }, 1500)
        };

        counter();
        input.value = "";
    }
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
            item.remove();
        });
        counter();
    }, 500);
    setTimeout(() => {
        clearSpan.classList.remove("active");
    }, 800)
};

function counter() {
    let itemCount = 0;
    const items = document.querySelectorAll(".todo-item");
    const itemInfo = document.querySelector(".item-info");
    const empty = document.querySelector(".empty");
    const endContainer = document.querySelector(".container-ending");
    items.forEach(() => {
        itemCount++;
    });
    if (itemCount !== 0) {
        itemInfo.innerHTML = `You have <span class="item-count">${itemCount}</span> pending tasks`;
        endContainer.classList.add("active");
        empty.classList.add("blocked");
    }
    else {
        endContainer.classList.remove("active");
        empty.classList.remove("blocked");
    }
}
