const passwordBox = document.getElementById("password");
const copy = document.getElementById("copyimage");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+=}[{|?-";
const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyFx() {
  passwordBox.select();
  document.execCommand("copy");
}

// copy.addEventListener("click", (e) => {
//   const copy1 = document.createElement("p");
//   copy1.innerHTML = "Password copied!";
//   document.body.appendChild(copy1);
// });
copy.addEventListener("click", (e) => {
  alert("Password Copied");
});
