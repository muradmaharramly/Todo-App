const langData = {
    az: [
        "Çıxış <ion-icon name=\"exit-outline\"></ion-icon>",
        "Çıxmaq istədiyinə əminsən?",
        "Bəli",
        "Xeyr",
        "Əlasan! Belə davam et!",
        "Taskı Silirsən?! Bəyənmədim bu fikri...",
        "Sil",
        "Ləğv et",
        "Bütün tasklar?! Bu addımın sonu xoş görünmür.",
        "Sil",
        "Ləğv et",
        "Profili gör <ion-icon name=\"chevron-forward-outline\"></ion-icon>",
        "Tamamlandı!",
        "Silindi!",
        "Hamısı təmizləndi!",
        "Daxil edilən boş ola bilməz!",
        "Heç bir tapşırığınız yoxdur",
        "Sənin <span class=\"item-count\">0</span> gözləyən tapşırığın var",
        "Hamısını təmizlə <ion-icon name=\"trash-bin-outline\"></ion-icon>",
        "<a href=\"https://www.linkedin.com/in/murad-maharramly/\">Murad Mahərrəmli</a> tərəfindən hazırlanmışdır",
        "Dili dəyişdir"
    ],
    en: [
        "Logout <ion-icon name=\"exit-outline\"></ion-icon>",
        "Are you sure you want to log out?",
        "Yes",
        "No",
        "Your are perfect! Keep going!",
        "Are you deleting the task?! I didn’t like this idea…",
        "Delete",
        "Cancel",
        "All tasks? This path doesn’t end well.",
        "Delete",
        "Cancel",
        "See Profile <ion-icon name=\"chevron-forward-outline\"></ion-icon>",
        "Done!",
        "Deleted!",
        "All Cleared!",
        "Input can't be empty!",
        "You don't have any task",
        "You have <span class=\"item-count\">0</span> pending tasks",
        "Clear All <ion-icon name=\"trash-bin-outline\"></ion-icon>",
        "Developed by <a href=\"https://www.linkedin.com/in/murad-maharramly/\">Murad Maharramli</a>",
        "Change language"
    ]
};

let changeText = document.querySelectorAll(".changeText");

const langBtn = document.querySelector(".lang-btn");
const Flag = document.querySelector(".lang-btn img");

let currentLang = localStorage.getItem("language") || "en"; 

function applyLanguage(language) {
    if (localStorage.getItem("language") !== language) {
        localStorage.setItem("language", language); 
    }

    currentLang = language; 
    changeText.forEach((item, index) => {
        item.innerHTML = langData[language][index];
    });

    if (language === "az") {
        Flag.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png";
    } else {
        Flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png";   
    }

    counter();
}

function changeLanguage(){
    if (currentLang === "en") {
        applyLanguage("az");
        langBtn.style.transform = "rotate(180deg)";
    } else {
        applyLanguage("en");
        langBtn.style.transform = "rotate(360deg)";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
});

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
