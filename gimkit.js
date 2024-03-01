function clickAns() {
  const correct = document.getElementsByClassName("sc-kRkRkg bvwQEF");
  correct[0].click();
}
function clickCont() {
  const contin = document.getElementsByClassName("sc-bYdiNP hMnMej");
  contin[0].click();
}
while (true) {
  setTimeout(clickAns, 1000);
  setTimeout(clickCont, 1000);
}
