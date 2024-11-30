const langData = {
    az: [
        "Geri", "Dili dəyişdir", "Todo Tətbiqində Aləminizə Giriş", "Hesabınız yoxdur?",
        "Qeydiyyatdan keçin", "Daxil ol", "İstifadəçi adı", "Şifrə", "Məni yadda saxla", "Daxil ol",
    ],
    en: [
        "Back", "Change language", "Access Your Universe in Todo App", "Don't have an account?",
        "Sign Up", "Login", "Username", "Password", "Remember Me", "Login",
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

function changeLanguageLogin() {
    const UsernameInput = document.querySelector(".login-username");
    const PasswordInput = document.querySelector(".login-password");

    if (currentLang === "en") {
        applyLanguage("az");
        langBtn.style.transform = "rotate(360deg)";
        UsernameInput.placeholder = "İstifadəçi adı daxil edin...";
        PasswordInput.placeholder = "Şifrəni daxil edin...";
    } else {
        applyLanguage("en");
        langBtn.style.transform = "rotate(-360deg)";
        UsernameInput.placeholder = "Enter username...";
        PasswordInput.placeholder = "Enter password...";
    }
}
