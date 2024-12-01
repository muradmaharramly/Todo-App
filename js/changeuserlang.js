const langData = {
    az: [
        "Geri", "Şəkil yükləndi", "Sən mükəmməl görünürsən!", "Xəta", "Saxlamaq üçün uyğun şəkil yoxdur!", "Yadda saxla", "Istifadəçi adı :", "Səviyyə :", "Status :", "Xal :",
        "<a href=\"https://www.linkedin.com/in/murad-maharramly/\">Murad Mahərrəmli</a> tərəfindən hazırlanmışdır", 
        "Dili dəyişdir"
    ],
    en: [
        "Back", "Image uploaded", "Your are looking perfect!", "Error", "No valid image to save.", "Save", "Username :", "Level :", "Status :", "Point :",
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
        langBtn.style.transform = "rotate(180deg)";
    } else {
        Flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png";  
        langBtn.style.transform = "rotate(-360deg)"; 
    }
    

    counter();
}

function changeLanguageUser() {
    if (currentLang === "en") {
        applyLanguage("az");
        langBtn.style.transform = "rotate(360deg)";
    } else {
        applyLanguage("en");
        langBtn.style.transform = "rotate(-360deg)";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
});
