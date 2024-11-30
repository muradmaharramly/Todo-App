const langData = {
    az: [
        "Geri", "Dili dəyişdir", "Qeydiyyatdan keçin", "İstifadəçi adı", "Şifrə", "Şifrəni təsdiqləyin",
        "Şərtləri qəbul edin", "Qeydiyyatdan keçin", "Todo Tətbiqində Aləminizi Yaradın", "Artıq hesabınız var?", "Daxil olun",
    ],
    en: [
        "Back", "Change language", "Sign Up", "Username", "Password", "Confirm Password",
        "Accept Terms", "Sign Up", "Create Your Universe in Todo App", "Already have an account?", "Login",
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

function changeLanguageSignUp(){
    if (currentLang === "en") {
        applyLanguage("az");
        langBtn.style.transform = "rotate(360deg)";
    } else {
        applyLanguage("en");
        langBtn.style.transform = "rotate(-360deg)";
    }
}