const langData = {
    az: [
        "Çıxış",
        "Çıxmaq istədiyinə əminsən?",
        "Bəli",
        "Xeyr",
        "Əlasan! Belə davam et!",
        "Profili gör <ion-icon name=\"chevron-forward-outline\"></ion-icon>",
        "Tamamlandı!",
        "Silindi!",
        "Hamısı təmizləndi!",
        "Daxil edilən boş ola bilməz!",
        "Heç bir tapşırığınız yoxdur",
        "Sənin <span class=\"item-count\">0</span> gözləyən tapşırığın var",
        "Hamısını təmizlə",
        "<a href=\"https://www.linkedin.com/in/murad-maharramly/\">Murad Mahərrəmli</a> tərəfindən hazırlanmışdır",
        "Dili dəyişdir"
    ],
    en: [
        "Logout",
        "Are you sure you want to log out?",
        "Yes",
        "No",
        "Your are perfect! Keep going!",
        "See Profile <ion-icon name=\"chevron-forward-outline\"></ion-icon>",
        "Done!",
        "Deleted!",
        "All Cleared!",
        "Input can't be empty!",
        "You don't have any task",
        "You have <span class=\"item-count\">0</span> pending tasks",
        "Clear All",
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
