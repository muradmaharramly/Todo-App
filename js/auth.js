document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementsByClassName("sign-up")[0];
    const signupMessage = document.getElementsByClassName("signup-message")[0];
    const passowrdWarning = document.querySelector(".password-warning");
  
    signupBtn.addEventListener("click", () => {
      const username = document.getElementsByClassName("signup-username")[0].value;
      const password = document.getElementById("signUp-password").value;
      const passwordAgain = document.getElementById("signUp-password-again").value;
      
      if (password.length < 8) {
        signupMessage.style.color = "red";
        passowrdWarning.style.display = "block";
        setTimeout( () => {
            passowrdWarning.style.display = "none";
        }, 4000)
        return;
      }

      if (!username || !password || !passwordAgain) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "All fields are required.";
        return;
      }
  
      if (password !== passwordAgain) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Passwords don't match.";
        return;
      }
  
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      signupMessage.style.color = "green";
      signupBtn.innerHTML = "<div class=\"pre-loader\"><div class=\"pre-load-circle1\"></div><div class=\"pre-load-circle2\"></div></div>";
      signupMessage.textContent = "Successful! Redirecting...";
  
      setTimeout(() => {
        window.location.replace("https://todo-app-dynamic.netlify.app/login");
      }, 2000);
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementsByClassName("login")[0];
    const loginMessage = document.getElementsByClassName("login-message")[0];

    if (!loginBtn || !loginMessage) {
      console.log("Login button or message element not found.");
      return;
    }
  
    loginBtn.addEventListener("click", () => {
      const username = document.getElementsByClassName("login-username")[0].value;
      const password = document.getElementsByClassName("login-password")[0].value;
  
      if (!username || !password) {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Both fields are required.";
        return;
      }
  
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");
  
      if (username === savedUsername && password === savedPassword) {
        loginMessage.style.color = "green";
        loginBtn.innerHTML = "<div class=\"pre-loader\"><div class=\"pre-load-circle1\"></div><div class=\"pre-load-circle2\"></div></div>";
        loginMessage.textContent = "Successful! Redirecting...";
  
        setTimeout(() => {
            window.location.replace("https://todo-app-dynamic.netlify.app/app");
          }, 2000);
      } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid username/password.";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const appusername = document.querySelector(".app-username");
    const savedusername = localStorage.getItem("username");
    if (window.location.pathname === "/app.html") {    
        if (!savedusername || savedusername === "") {
            setTimeout(() => {
                localStorage.removeItem("username"); 
                window.location.replace("https://todo-app-dynamic.netlify.app"); 
            }, 500); 
        } else {
            appusername.innerHTML = savedusername; 
        }
    }
    

    const logoutBtn = document.querySelector(".logout");
    const logoutOverlay = document.querySelector(".logout-overlay");
    const yesBtn = document.querySelector(".btn-yes");
    const noBtn = document.querySelector(".btn-no");
    logoutBtn.addEventListener("click", () =>{
        logoutOverlay.classList.add("active");
        yesBtn.addEventListener("click", () => {
            logoutOverlay.classList.remove("active");
            setTimeout(() => {
                window.location.replace("https://todo-app-dynamic.netlify.app");
            }, 500);
        });
        
        noBtn.addEventListener("click", () => {
            logoutOverlay.classList.remove("active");
        });   
        
    })
  });
  
