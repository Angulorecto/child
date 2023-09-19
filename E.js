var name = document.getElementById("organization-profile-name");
var email = document.getElementById("organization-billing-email");
//Words
const randomParent = Math.floor(Math.random() * 1);
var parent = "default";
if (randomParent == 0) {
    parent = "Network";
} else if (randomParent == 1) {
    parent = "Organization";
} else {
    parent = "Association";
};

const Adjs = ["","","","","","","","","","",""];
const Noun = ["","","","","","","","","","",""];

const randomAdj = Math.floor(Math.random() * Adjs.length);
var corp = Adjs[randomAdj];
name.value = Adj;
