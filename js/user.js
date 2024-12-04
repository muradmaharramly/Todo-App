const usernametext = document.querySelector(".username-text");
const pointText = document.querySelector(".point-text");
const leveltext = document.querySelector(".level-text");
const StatusContent = document.querySelector(".status-content");
const beginnerIcon = document.querySelector(".beginner-icon");
const middleIcon = document.querySelector(".middle-icon");
const professionalIcon = document.querySelector(".professional-icon");

function getPoints() {
    return Number(window.localStorage.getItem("DoneCount")) || 0;
}

function updatePoint() {
    usernametext.innerHTML = window.localStorage.getItem("username") || "Username";
    let points = getPoints(); 
    pointText.innerHTML = points;
    
    if (!points) {
        points = 0;
        window.localStorage.setItem("DoneCount", points);
    }
    else if (points >= 0 && points <= 50) {
        StatusContent.innerHTML = "Beginner";
        beginnerIcon.style.display = "inline";
        middleIcon.style.display = "none";
        professionalIcon.style.display = "none";
    } else if (points > 50 && points <= 250) {
        StatusContent.innerHTML = "Middle";
        middleIcon.style.display = "inline";
        beginnerIcon.style.display = "none";
        professionalIcon.style.display = "none";
    } else if(points > 250) {
        StatusContent.innerHTML = "Professional";
        professionalIcon.style.display = "inline";
        middleIcon.style.display = "none";
        beginnerIcon.style.display = "none";
    } else {
        StatusContent.innerHTML = "Not setted";
        beginnerIcon.style.display = "none";
        middleIcon.style.display = "none";
        professionalIcon.style.display = "none";
    }
}
function updateLevel() {
    let points = getPoints();
    let level;

    if (points >= 1 && points <= 5) {
        level = 1; 
    } else if (points > 5 && points <= 10) {
        level = 2; 
    } else {
        level = Math.floor(points / 10);
    }

    if (level >= 100) {
        level = 100;
    }

    leveltext.innerHTML = level; 
}


function setItem(key, value) {
    window.localStorage.setItem(key, value);
    updatePoint(); 
    updateLevel();
}
//chatgpt
window.addEventListener("storage", (event) => {
    if (event.key === "username") {
        updatePoint();  
    } else if (event.key === "DoneCount") {
        updatePoint(); 
        updateLevel();     
    }
});
//

document.addEventListener("DOMContentLoaded", () => {
    updatePoint();
    updateLevel();
});

const fileInput = document.getElementById("fileInput");
const imgDiv = document.querySelector(".img-div img");
const saveButton = document.querySelector(".save-changes");
const imageUpload = document.querySelector(".image-upload");
const uploadSuccesOverlay = document.querySelector(".upload-succes-overlay");
const uploadErrorOverlay = document.querySelector(".upload-error-overlay");

function updateProfileImage() {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        imgDiv.src = savedImage; 
    } else {
        imgDiv.src = "https://i.pinimg.com/736x/11/27/cc/1127cc05230f856fc393ce699a1a1451.jpg"; 
        
    }
};
document.addEventListener("DOMContentLoaded",() =>{
    updateProfileImage();
});

fileInput.addEventListener("change", (event) => {
    saveButton.style.display = "inline";
    imageUpload.style.display = "none";
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imgDiv.src = e.target.result;
        };
        reader.readAsDataURL(file); 
    } else {
        updateProfileImage();
    }
});

saveButton.addEventListener("click", () => {
    saveButton.style.display = "none";
    imageUpload.style.display = "block";
    const currentImage = imgDiv.src;
    if (currentImage.startsWith("data:image")) { 
        localStorage.setItem("profileImage", currentImage);
        uploadSuccesOverlay.style.display = "flex";
        setTimeout(() =>{
            uploadSuccesOverlay.style.display = "none";
        },2000);
    } else {
        uploadErrorOverlay.style.display = "flex";
        setTimeout(() =>{
            uploadErrorOverlay.style.display = "none";
        },2000);
        updateProfileImage(); 
    };
});

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".pre-loader");
    preloader.style.display = "flex";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
});
