const langs = {
    EN: "en",
    AZ: "az"
};

const langData = {
    az: [
        "Çıxış", 
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

function changeLanguage(){
    if(Flag.src==="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png"){
        Flag.src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png";
        langBtn.style.transform ="rotate(180deg)";
        changeText.forEach((item,index)=>item.innerHTML=langData.az[index]);
        counter();
        
    }
    else{
        Flag.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png";
        langBtn.style.transform ="rotate(360deg)";
        changeText.forEach((item,index)=>item.innerHTML=langData.en[index]);
        counter();
    }
}
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