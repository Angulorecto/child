let name = prompt("What text would you like to transalate?");
let text = "";
function alfabetCheck() {
  if name.includes("E") {
    text.value += "𝕰";
    alert(text);
  }
}
alfabetCheck();
