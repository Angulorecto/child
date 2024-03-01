function clickAns() {
  const correct = document.getElementsByClassName("sc-kRkRkg bvwQEF");
  correct[0].click();
}
function clickCont() {
  const contin = document.getElementsByClassName("sc-bYdiNP hMnMej");
  contin[0].click();
}
while (true) {
  setTimeout(clickAns, 100);
  setTimeout(clickCont, 100);
}
