const LoginForm = document.querySelector("#LoginForm form");
const SignUpForm = document.querySelector("#SignUpForm form");
const year = document.querySelector("#currentYear");

if (year) year.textContent = new Date().getFullYear();

// Preserves the original frontend-only demo login behavior.
// This is not real account authentication and does not contact Django.
if (LoginForm) {
  LoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("user", "true");
    window.location.href = "../Feed/Feed.html";
  });
}

// The original project did not have a signup API or signup handler.
// Keep the form presentational rather than pretending an account was created.
if (SignUpForm) {
  SignUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = SignUpForm.querySelector('button[type="submit"]');
    if (button) {
      const original = button.innerHTML;
      button.textContent = "Signup is not connected yet";
      button.disabled = true;
      window.setTimeout(() => {
        button.innerHTML = original;
        button.disabled = false;
      }, 2200);
    }
  });
}
