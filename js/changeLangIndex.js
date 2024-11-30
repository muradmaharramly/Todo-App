const langs = {
    EN: "en",
    AZ: "az"
};

const langData = {
    az: [
        "Giriş", 
        "Qeydiyyat", 
        "Planlı qalın, daha çoxuna nail olun.", 
        "Todo App sizə planlı qalmağa və məhsuldar olmağa kömək edir. Tapşırıqlarınızı idarə edin, məqsədlərinizi prioritetləşdirin və hər gün asanlıqla və özünə inamla uğur əldə edin.", 
        "Bugünkü hədəflərinizi tamamlayın.", 
        "Gözləyir",
        "İndi başlayın, məhsuldar olun!", 
        "Başlayın <ion-icon class=\"arrow-icon\" name=\"arrow-forward-outline\"></ion-icon>", 
        "<a href=\"https://www.linkedin.com/in/murad-maharramly/\">Murad Mahərrəmli</a> tərəfindən hazırlanmışdır", 
        "Dili dəyişdir"
    ],
    en: [
        "Login", 
        "Sign Up", 
        "Stay organized, achieve more effortlessly.", 
        "Todo App helps you stay organized and productive effortlessly. Manage your tasks, prioritize your goals, and achieve success with ease and confidence every day.", 
        "Complete today's goals.", 
        "Pending",
        "Start now, stay productive!", 
        "Get started <ion-icon class=\"arrow-icon\" name=\"arrow-forward-outline\"></ion-icon>", 
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
        localStorage.setItem("language", language); // Sadece localStorage'da farklı bir dil varsa kaydet
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

function changeLanguageOfMainSite(){
    if (currentLang === "en") {
        applyLanguage("az");
        langBtn.style.transform = "rotate(360deg)";
    } else {
        applyLanguage("en");
        langBtn.style.transform = "rotate(-360deg)";
    }
};