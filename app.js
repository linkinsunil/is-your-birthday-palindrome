const birthDay = document.querySelector(".input-birthday");
const btnPalindromeCheck = document.querySelector("#btn-checkPalindrome");
const message = document.querySelector("#message");

btnPalindromeCheck.addEventListener("click", handleClick)

function isPalindrome(str) {
    var reverse = reverseStr(str);  
    return str === reverse;
}

function reverseStr(str) {
    // let tempReversedStr = str.split("-").join("")
    let reversedStr = str.split("").reverse().join("")
    return reversedStr;
}

function convertDateToString(date){

    var dateStr = { day: "", month: "", year: ""}

    if(date.day < 10) {
        dateStr.day = '0' + date.day; 
    } else {
        dateStr.day = date.day.toString();
    }

    if(date.month < 10) {
        dateStr.month = '0' + date.month; 
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString()

    return dateStr;

}

function getAllDateFormats(date){

    let dateStr = convertDateToString(date);

    let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    let mmddyyy = dateStr.month + dateStr.day + dateStr.year;
    let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    let ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    let mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    let yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyy, yyyymmdd, ddmmyy, mmddyy,yymmdd];

}

function checkPalindromeForAllDateFormats(date){
    let listOfPalindromes = getAllDateFormats(date);
    let temp = false;

    for(let i = 0; i < listOfPalindromes.length; i++) {
        if(isPalindrome(listOfPalindromes[i])) {
            temp = true;
            break;
        }
    }

    return temp;
}

function isLeapYear(year) {
    if (year % 400 ===0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

//get next date taking care of month, year and leap year too
function getNextDate(date) {
    let day = date.day + 1; //incrementing day
    let month = date.month;
    let year = date.year;

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 0 - 11 index

    if (month === 2) { //check for february
        if (isLeapYear(year)) { //check for leap
            if(day > 29) {
                day = 1;
                month++
            }
        }else {
            if(day > 28) {
                day = 1;
                month++
            }
        }
    } else { // check for other months except feb
        // check if day exceeds max days in month
        if (day > daysInMonth[month-1]) {
            day = 1;
            month++;
        }
    }

    // increment year if month is greater than 12
    if (month > 12) {
        month = 1;
        year++
    }

    return {
        day: day,
        month: month,
        year
    }

}

//get next palindrome date
function getNextPalindromeDate(date) {
    let counter = 0;
    let nextDate = getNextDate(date);

    while(1){
        counter++;
        let isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if (isPalindrome) {
            break;
        }
        nextDate = getNextDate(nextDate);
    }

    return [counter, nextDate];
}

function handleClick() {
    let bdayStr = birthDay.value;

    if(bdayStr !== ""){
        let listOfDate = bdayStr.split("-");

        let date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        }

        let isPalindrome = checkPalindromeForAllDateFormats(date);

        if (isPalindrome){
            message.innerText = "Congratulations! Your birthday is a Palindrome 🥳🥳"
        } else {
            let [counter, nextDate] = getNextPalindromeDate(date);

            message.innerText = `Uh oh! The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${counter} days! 😔`
        }
    }
}

let date = {
    day: 8,
    month: 8,
    year: 2021
}

// console.log(getNextPalindromeDate(date))
