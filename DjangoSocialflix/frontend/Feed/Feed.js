const navList = document.querySelector("#NavUl");
let userLoggedIn = Boolean(localStorage.getItem("user"));

function renderAccountAction() {
  if (!navList) return;
  navList.innerHTML = userLoggedIn
    ? '<li><button class="btn btn-ghost" id="logoutButton" type="button">Logout</button></li>'
    : '<li><a class="btn btn-ghost" href="../Auth/Auth.html">Login / Register</a></li>';

  const logoutButton = document.querySelector("#logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.href = "../Auth/Auth.html";
    });
  }
}

function checkLogin() {
  if (!localStorage.getItem("user")) {
    window.location.href = "../Auth/Auth.html";
    return;
  }
  userLoggedIn = true;
  renderAccountAction();
}

// Visual-only interactions for the sample post. These do not call the backend.
document.querySelectorAll(".like-action").forEach((button) => {
  button.addEventListener("click", () => {
    const liked = button.classList.toggle("liked");
    button.innerHTML = liked ? "<span>♥</span> Liked" : "<span>♡</span> Like";
  });
});

document.querySelectorAll(".save-action").forEach((button) => {
  button.addEventListener("click", () => {
    const saved = button.classList.toggle("saved");
    button.textContent = saved ? "▣" : "⌑";
    button.setAttribute("aria-label", saved ? "Unsave post" : "Save post");
  });
});

renderAccountAction();
window.addEventListener("DOMContentLoaded", checkLogin);
