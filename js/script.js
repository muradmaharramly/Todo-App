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
const listArr = [];
let motivationalMessagesEng = [
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
let motivationalMessagesAz = [
    "Əla iş! Davam et, irəlilə! 💪",
    "Bir tapşırıq daha bitdi, dayanıqsızsan! 🚀",
    "İnanılmaz irəliləyişlər edirsən! 🌟",
    "Hər addım önəmlidir. Afərin! 👏",
    "Alovlanırsan! Davam et! 🔥",
    "Uğur, kiçik qələbələrdən qurulur! 🏆",
    "Bax, necə gedirsən! Əla iş görürsən! 🌈",
    "Bu gün bir daha qələbə qazandın! 🌟",
    "Nə qədər bacarıqlı olduğunu sübut edirsən! 💼",
    "Kiçik addımlar böyük nailiyyətlərə aparır! 🌱"
];

let ChangeText = document.querySelectorAll(".changeText");

const langButn = document.querySelector(".lang-btn");
const flag = document.querySelector(".lang-btn img");
let quotes = motivationalMessagesEng;

function changeLanguage(){
    if(flag.src==="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png"){
        flag.src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png";
        langButn.style.transform ="rotate(180deg)";
        quotes = motivationalMessagesAz;    
    }
    else{
        flag.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png";
        langButn.style.transform ="rotate(360deg)";
        quotes = motivationalMessagesEng;
    }
}
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
            let ind = Math.round(Math.random() * 10);
            if (ind < 10) {
                motivationArea.style.display = "block";
                motivationText.innerHTML = quotes[ind];
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
            }, 1000)
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
            item.classList.remove("cleaned");
            item.remove();
        });
        counter();
    }, 500);
    setTimeout(() => {
        clearSpan.classList.remove("active");
    }, 800)
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
