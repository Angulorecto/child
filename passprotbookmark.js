let passwordInput = prompt("What is the password?");
if (passwordInput == "") {
  alert("Nice try!");
} else if (passwordInput != "sam i am") {
  alert("Nice try!");
} else {
  window.location.replace("https://www.hlj.com/");
};
