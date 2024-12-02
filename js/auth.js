document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementsByClassName("sign-up")[0];
  const kindReminder = document.querySelector(".kind-reminder");

  signupBtn.addEventListener("click", () => {
    const username = document.getElementsByClassName("signup-username")[0].value;
    const password = document.getElementById("signUp-password").value;
    const passwordAgain = document.getElementById("signUp-password-again").value;

    if (password.length>0 && password.length < 8) {
      kindReminder.style.display = "block";
      if (currentLang === "en") {
        kindReminder.textContent = "Password must be at least 8 characters."
      }
      else {
        kindReminder.textContent = "Şifrə ən az 8 simvoldan ibarət olmalıdır."
      }
      setTimeout(() => {
        kindReminder.style.display = "none";
      }, 4000)
      return;
    }

    if (!username || !password || !passwordAgain) {
      kindReminder.style.display = "block";
      if (currentLang === "en") {
        kindReminder.textContent = "All of this fields are required.Please fill them."   
      } else {
        kindReminder.textContent = "Bütün xanaları doldurmaq məcburidir.Doldurun."
      }
      setTimeout(() => {
        kindReminder.style.display = "none";
      }, 4000)
      return;
    }

    if (password !== passwordAgain) {
      kindReminder.style.display = "block";
      if (currentLang === "en") {
        kindReminder.textContent = "Passwords don't match.Fill them carefully."   
      } else {
        kindReminder.textContent = "Şifrələr bir-biriylə uyuşmur.Diqqətli yazın."
      }
      setTimeout(() => {
        kindReminder.style.display = "none";
      }, 4000)
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    signupBtn.innerHTML = "<div class=\"loader\"><div class=\"pre-load-circle1\"></div><div class=\"pre-load-circle2\"></div></div>";
    kindReminder.style.display = "block";
    kindReminder.style.backgroundColor = "#289d28";
      if (currentLang === "en") {
        kindReminder.textContent = "Succesfull singup! You are redirecting right now..."   
      } else {
        kindReminder.textContent = "Uğurla qeydiyyat etdiniz!İndi yönləndirirlirsiniz..."
      }
      setTimeout(() => {
        kindReminder.style.display = "none";
        kindReminder.style.backgroundColor = "#ba3024";
      }, 4000)

    setTimeout(() => {
      window.location.replace("https://todo-app-dynamic.netlify.app/login");
    }, 2000);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementsByClassName("login")[0];
  const kindlyReminder = document.querySelector(".kind-reminder-login");

  if (!loginBtn) {
    console.log("Login button or message element not found.");
    return;
  }

  loginBtn.addEventListener("click", () => {
    const username = document.getElementsByClassName("login-username")[0].value;
    const password = document.getElementsByClassName("login-password")[0].value;

    if (!username || !password) {
      kindlyReminder.style.display = "block";
      if (currentLang === "en") {
        kindlyReminder.textContent = "Both of this fields are required.Please fill them."   
      } else {
        kindlyReminder.textContent = "Hər iki xananı doldurmaq məcburidir.Doldurun."
      }
      setTimeout(() => {
        kindlyReminder.style.display = "none";
        kindlyReminder.style.backgroundColor = "#ba3024";
      }, 4000)
      return;
    }

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      loginBtn.innerHTML = "<div class=\"loader\"><div class=\"pre-load-circle1\"></div><div class=\"pre-load-circle2\"></div></div>";
      kindlyReminder.style.display = "block";
      kindlyReminder.style.backgroundColor = "#289d28";
      if (currentLang === "en") {
        kindlyReminder.textContent = "Succesfull login! You are redirecting right now..."   
      } else {
        kindlyReminder.textContent = "Uğurla giriş etdiniz.İndi yönləndirirlirsiniz..."
      }
      setTimeout(() => {
        kindlyReminder.style.display = "none";
      }, 4000);

      setTimeout(() => {
        window.location.replace("https://todo-app-dynamic.netlify.app/app");
      }, 2000);
    } else {
      kindlyReminder.style.display = "block";
      if (currentLang === "en") {
        kindlyReminder.textContent = "Username or password incorrect. Be carefull!"   
      } else {
        kindlyReminder.textContent = "Istifadəçi adı və ya şifrə yanlışdır!Diqqətli ol!"
      };
      setTimeout(() => {
        kindlyReminder.style.display = "none";
      }, 4000)
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const appusername = document.querySelector(".app-username");
  const savedusername = localStorage.getItem("username");
  if (window.location.pathname === "/app") {
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
  logoutBtn.addEventListener("click", () => {
    logoutOverlay.classList.add("active");
    yesBtn.addEventListener("click", () => {
      logoutOverlay.classList.remove("active");
      setTimeout(() => {
        window.location.replace("https://todo-app-dynamic.netlify.app");
      }, 250);
    });

    noBtn.addEventListener("click", () => {
      logoutOverlay.classList.remove("active");
    });

  })
});
