const birthDay = document.querySelector(".input-birthday");
const btnPalindromeCheck = document.querySelector("#btn-checkPalindrome");
const message = document.querySelector("#message");

btnPalindromeCheck.addEventListener("click", checkPalindrome)

function checkPalindrome() {
    console.log(birthDay.value);
    console.log(reverseStr(birthDay.value));
    message.innerText = reverseStr(birthDay.value);
}

function reverseStr(str) {
    const tempReversedStr = str.split("-").join("")
    const reversedStr = tempReversedStr.split("").reverse().join("")
    return reversedStr;
}