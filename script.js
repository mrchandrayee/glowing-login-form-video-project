const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");
const copyButton = document.getElementById("copyCss");
const focusCss = document.getElementById("focusCss");

function clearErrors() {
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let valid = true;
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    formMessage.textContent = "Demo login validated successfully!";
  }
});

[email, password].forEach(input => {
  input.addEventListener("input", () => {
    if (input === email) emailError.textContent = "";
    if (input === password) passwordError.textContent = "";
    formMessage.textContent = "";
  });
});

document.getElementById("forgotLink").addEventListener("click", event => {
  event.preventDefault();
  clearErrors();
  formMessage.textContent = "Password reset is a visual demo — connect your reset flow here.";
});
document.getElementById("signupLink").addEventListener("click", event => {
  event.preventDefault();
  clearErrors();
  formMessage.textContent = "Connect your registration page here.";
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(focusCss.textContent);
    copyButton.textContent = "Copied!";
  } catch {
    copyButton.textContent = "Copy unavailable";
  }
  setTimeout(() => copyButton.textContent = "Copy CSS", 1300);
});
