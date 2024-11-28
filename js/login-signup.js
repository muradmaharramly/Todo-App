const loginPasswordInput = document.querySelector(".login-section .login-password");
const loginEyeIcon = document.querySelector(".login-section .icon");
const signUpPasswordInput = document.querySelector(".signup-section .signup-password");
const signUpEyeIcon = document.querySelector(".signup-section .icon");
const signUpPasswordConfirmInput = document.querySelector(".signup-section .confirm");
const signUpEyeIcon2 = document.querySelector(".signup-section .icon-2");

loginEyeIcon.addEventListener('click', () => {
    if (loginEyeIcon.getAttribute("name") === "eye-off-outline") {
        loginPasswordInput.type = 'text'; 
        loginEyeIcon.setAttribute("name", "eye-outline"); 
        loginEyeIcon.style.transform = "rotate(180deg)";
    } else {
        loginPasswordInput.type = 'password'; 
        loginEyeIcon.setAttribute("name", "eye-off-outline"); 
        loginEyeIcon.style.transform = "rotate(-180deg)";
    }
});

signUpEyeIcon.addEventListener('click', () => {
    if (signUpEyeIcon.getAttribute("name") === "eye-off-outline") {
        signUpPasswordInput.type = 'text';
        signUpEyeIcon.setAttribute("name", "eye-outline"); 
        signUpEyeIcon.style.transform = "rotate(180deg)";
    } else {
        signUpPasswordInput.type = 'password'; 
        signUpEyeIcon.setAttribute("name", "eye-off-outline"); 
        signUpEyeIcon.style.transform = "rotate(-180deg)";
    }
});
signUpEyeIcon2.addEventListener('click', () => {
    if (signUpEyeIcon2.getAttribute("name") === "eye-off-outline") {
        signUpPasswordConfirmInput.type = 'text';
        signUpEyeIcon2.setAttribute("name", "eye-outline"); 
        signUpEyeIcon2.style.transform = "rotate(180deg)";
    } else {
        signUpPasswordConfirmInput.type = 'password'; 
        signUpEyeIcon2.setAttribute("name", "eye-off-outline"); 
        signUpEyeIcon2.style.transform = "rotate(-180deg)";
    }
});

const mainBody = document.querySelector(".login-signup-body");
const changeToSignUp = document.querySelector(".change-to-signup");
const changeToLogIn = document.querySelector(".change-to-login");
const logInArea = document.querySelector(".login-section");
const signUpArea = document.querySelector(".signup-section");

changeToSignUp.addEventListener("click", () => {
    logInArea.classList.add("deactive");
    signUpArea.classList.remove("deactive");
    mainBody.style.backgroundImage = "url(img/bg-img-left.png)"

});
changeToLogIn.addEventListener("click", () => {
    signUpArea.classList.add("deactive");
    logInArea.classList.remove("deactive"); 
    mainBody.style.backgroundImage = "url(img/bg-img-right.png)"
});
