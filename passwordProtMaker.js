let password = prompt("What's gonna be the password?");
let url = prompt("What's the website url?");
let response = prompt("Copy this and bookmark it:","javascript:let passwordInput = prompt(" + "What is the password?" + ");if (passwordInput == " + "" + ") {  alert("+"Nice try!" + ");} else if (passwordInput != " + password + ") {  alert(" + "Nice try!"+");} else {  window.location.replace("+ url + ");};");
