const birthDay = document.querySelector(".input-birthday");
const btnPalindromeCheck = document.querySelector("#btn-checkPalindrome");
const message = document.querySelector("#message");

btnPalindromeCheck.addEventListener("click", checkPalindrome)

function checkPalindrome(){
    console.log(birthDay.value)
    console.log(reverseFunc(birthDay.value));
    // message.innerText = reverseFunc(birthDay);
}

function reverseFunc(str){
    const reversedStr = str.split("-").reverse().join("");
    return reversedStr;
}
