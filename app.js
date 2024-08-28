const myDate = '19.07.2006' 

const isValidDate = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;
    if (!regex.test(date)) {
        return false; 
    }
    const parts = date.split('.');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    if (month === 2) { // Февраль
        const isLeapYear = (parts[2] % 4 === 0 && parts[2] % 100 !== 0) || (parts[2] % 400 === 0);
        return day <= (isLeapYear ? 29 : 28);
    }
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day <= daysInMonths[month - 1];
};

const getLuckyNumber = (date) => {
const parts = date.split('')
let sum = 0;
let lastsum = 0
for (let i = 0; i < parts.length; i++) {
    let num = parts[i]
    if (!isNaN(num) && num !== '.') {
        sum += parseInt(num); 
    }
}
const str = sum.toString().split('')
for (const num of str) {
lastsum += parseInt(num)
}
return lastsum
}

const descriptions = {
    1: "Indicates that all undertakings will be successful.",
    2: "Helps to be in the right place at the right time.",
    3: "Amulets with the number 3 promote finding harmonious solutions to complex situations.",
    4: "Can protect against financial losses, serving as a symbol of stability and permanence.",
    5: "Is inherent in positive and goal-oriented people, symbolizes opportunities and open perspectives.",
    6: "The happiest number of all, but also the most treacherous: luck can smile easily, but if you don't feel the limits, you can lose a lot.",
    7: "Guides you on the true path, helping to see the best option for resolving problems.",
    8: "Especially favors women, bringing family happiness.",
    9: "Helps with self-improvement, gaining knowledge, and opening new horizons.",
    10: "Represents completeness and a sense of fulfillment the bridging point between the earthly and spiritual realms."
};

function getInputValue() { 
    const inputElement = document.querySelector("#textInput"); 
    const inputValue = inputElement.value; 
    const outputElement = document.querySelector("#outputDescription"); 

    if (isValidDate(inputValue)) {
        const resultValue = getLuckyNumber(inputValue);
        inputElement.value = `Your lucky number is: ${resultValue}`; 

        if (descriptions[resultValue]) {
            outputElement.textContent = descriptions[resultValue];
        }
    } else {
        alert("Please enter the correct date in the format DD.MM.YYYY.");
        inputElement.value = ""; 
        outputElement.textContent = ""; 
    }
}; 

window.onload = function() { 
    document.querySelector("#calculateBtn").onclick = getInputValue; 
};

  