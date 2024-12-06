const langData = {
    az: [
        "Giriş", 
        "Qeydiyyat", 
        "Planlı qalın, daha çoxuna nail olun.", 
        "Todo App sizə planlı qalmağa və məhsuldar olmağa kömək edir. Tapşırıqlarınızı idarə edin, məqsədlərinizi prioritetləşdirin və hər gün asanlıqla və özünə inamla uğur əldə edin.", 
        "Hədəflərinizi tamamlayın.", 
        "Gözləyir",
        "İndi başlayın, məhsuldar olun!", 
        "Başlayın <ion-icon class=\"arrow-icon\" name=\"arrow-forward-outline\"></ion-icon>", 
        "Səviyyənizi yüksəldin!",
        "Sistemimizin necə işləyir.",
        "Tapşırıqları tamamlayaraq xal qazanın və irəliləyişinizi izləyin.",
        "Topladığınız xallarla səviyyəniz artır, bu isə sizin məhsuldarlığınızı və sədaqətinizi göstərir.",
        "Statusunuz da dəyişir! <span class=\"beginner\">Başlanğıc</span> olaraq başlayın, <span class=\"middle\">Orta</span> səviyyəyə yüksəlin və <span class=\"pro\">Peşəkar</span> olmaq üçün çalışın.",
        "Nə qədər çox uğur qazansanız, bir o qədər yüksək zirvələrə çatarsınız! Tapşırıqlarınızı idarə edin, nailiyyətlərinizi izləyin və profilinizin dinamik şəkildə böyüdüyünü görün. <a href=\"login.html\">Gəlin, hər tapşırığı dəyərli edək!</a> 🌟",
        "<a href=\"https://www.linkedin.com/in/murad-maharramly/\">Murad Mahərrəmli</a> tərəfindən hazırlanmışdır", 
        "Dili dəyişdir"
    ],
    en: [
        "Log in", 
        "Sign Up", 
        "Stay organized, achieve more effortlessly.", 
        "Todo App helps you stay organized and productive effortlessly. Manage your tasks, prioritize your goals, and achieve success with ease and confidence every day.", 
        "Complete goals.", 
        "Pending",
        "Start now, stay productive!", 
        "Get started <ion-icon class=\"arrow-icon\" name=\"arrow-forward-outline\"></ion-icon>", 
        "Level Up Your Journey!",
        "Here’s how our system works",
        "Complete tasks and earn points to track your progress.",
        "As you collect points, your level increases, showcasing your productivity and dedication.",
        "Your status evolves too! Start as a <span class=\"beginner\">Beginner</span>, advance to <span class=\"middle\">Middle</span>, and strive to become a <span class=\"pro\">Professional</span>.",
        "The more you accomplish, the higher you climb! Manage tasks, track your achievements, and watch your profile grow dynamically. <a href=\"login.html\">Let’s make every task count!</a> 🌟",
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

function changeLanguageOfMainSite(){
    if (currentLang === "en") {
        applyLanguage("az");
        langBtn.style.transform = "rotate(360deg)";
    } else {
        applyLanguage("en");
        langBtn.style.transform = "rotate(-360deg)";
    }
};
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
});