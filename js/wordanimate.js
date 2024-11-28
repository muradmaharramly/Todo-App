const wordsEng = [
    "Read a book for 1 hour",
    "Write your notes",
    "Clean your desk",
    "Organize your files",
    "Plan your day",
    "Call your friend",
    "Prepare for tomorrow",
    "Do your tasks",
    "Learn something new",
    "Check your emails",
    "Take a short walk",
    "Review your goals",
    "Fix your schedule",
    "Drink more water",
    "Stretch your body",
    "Focus on priorities",
    "Start a new project",
    "Reflect on today",
    "Prepare your meals",
    "Track your expenses"
];
const wordsAz = [
    "1 saat kitab oxu",
    "Qeydlərini yaz",
    "İş masanı təmizlə",
    "Fayllarını nizamla",
    "Gününə plan qur",
    "Dostuna zəng et",
    "Sabah üçün hazılaş",
    "Tapşırıqlarını yerinə yetir",
    "Yeni bir şey öyrən",
    "E-poçtlarını yoxla",
    "Qısa bir gəzinti et",
    "Məqsədlərini nəzərdən keçir",
    "Cədvəlini düzəlt",
    "Daha çox su iç",
    "Bədənini əsnət",
    "Prioritetlərə fokuslan",
    "Yeni layihəyə başla",
    "Bugünü düşün",
    "Yeməklərini hazırla",
    "Xərclərini nəzərdən keçir"
];

let texts = wordsEng;

const langButon = document.querySelector(".lang-btn");
const flags = document.querySelector(".lang-btn img");

function changeLanguageOur(){
    if(flags.src==="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png"){
        flags.src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png";
        langButon.style.transform ="rotate(180deg)";
        texts = wordsAz;  
    } 
    else{
        flags.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png";
        langButon.style.transform ="rotate(360deg)";
        texts = wordsEng;
    }
};

const mock = document.querySelector(".task-mock");
const checkmark = document.querySelector(".checkmark");
const cursorImg = document.querySelector(".cursor-img");
function fillmock() {
    setInterval(() => {
        let inx = Math.round(Math.random() * 10);
        if (inx < texts.length) {
            mock.innerHTML = texts[inx];
            checkmark.classList.add("clicked");
            cursorImg.classList.add("clicked");
            setTimeout(() => {
                checkmark.classList.remove("clicked");
                cursorImg.classList.remove("clicked");
            }, 250);
        }
    }, 4000);
}
fillmock();