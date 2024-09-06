const buttonElem = document.getElementById("check-btn");
const inputElem = document.getElementById("text-input");
const resultElem = document.getElementById("result");


buttonElem.addEventListener("click", checkPalindrome);

function checkPalindrome() {
 if (inputElem.value === "") {
  alert("Please input a value")
  resultElem.innerHTML = "";
  return;
 }
 const str = inputElem.value.replace(/[\W_]/g, "").toLowerCase();
 let isPalindrome = true;

 for (let i = 0; i < Math.floor(str.length / 2); i++) {
  if (str[i] !== str[str.length - 1 - i]) {
   isPalindrome = false;
   break;
  }
 }

 if (isPalindrome) {
  resultElem.innerHTML = inputElem.value.toUpperCase() + " is a palindrome!";
 } else {
  resultElem.innerHTML = inputElem.value.toUpperCase() + " is not a palindrome!";
 }
}