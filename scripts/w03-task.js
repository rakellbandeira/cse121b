/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */


function add (addNumber1, addNumber2) {
    return addNumber1 + addNumber2;
    
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

function subtract(snumber1, snumber2){
    return snumber1 - snumber2;
}


function subtractNumbers() {

    let subtNumber1 = Number(document.querySelector('#subtract1').value);
    let subtNumber2 = Number(document.querySelector('#subtract2').value);    
    document.querySelector('#difference').value = subtract(subtNumber1, subtNumber2);
}

document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);



/* Arrow Function - Multiply Numbers */

const multiply = (mnumber1, mnumber2) => mnumber1 * mnumber2;


const multiplyNumbers = () => {

    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = (dnumber1, dnumber2) => dnumber1 / dnumber2;

function divideNumbers () {
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(divNumber1, divNumber2);

}

document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);


/* Decision Structure */

/* a */

// Declare and instantiate a variable that stores the numeric value 
// entered by the user in the subtotal field. 

let subTotalValue = Number(document.getElementById('subtotal'));
let validation = "";
console.log(validation = (subTotalValue) => typeof subTotalValue === 'number' && !isNan(subTotalValue));

function isValidNumericAmout(subTotalValue) {
    return typeof subTotalValue === 'number' && !isNan(subTotalValue);
}



// Check IF the membership checkbox has been checked by the user to apply a 
// 20% discount to the subtotal amount.
function applyDiscount() {
    let memberCheckbox = document.getElementById('member');
    let subtotalInput = Number(document.getElementById('subtotal').value);
    let totalSpan = document.getElementById('total');
    let total = 0;
    
    if (memberCheckbox.checked) {
        
        total = subtotalInput - subtotalInput * 0.2;
        

    } else {
        total = subtotalInput;
    }

    
    
    return totalSpan.textContent = parseFloat(total.toFixed(2));
}

document.querySelector("#getTotal").addEventListener("click", applyDiscount);





/* ARRAY METHODS - Functional Programming */

/* Output Source Array */

let numbersArray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13];
document.getElementById('array').value = numbersArray;

/* Output Odds Only Array */

    //Use the filter() array method to find all of the odd numbers of the array 
    //variable and assign the result to the HTML element with an ID of odds
document.getElementById('odds').innerHTML = numbersArray.filter(number => number%2 !== 0);


/* Output Evens Only Array */

    //Use the filter() array method to find all of the even numbers of the array 
    //variable and assign the result to the HTML element with an ID of evens
document.getElementById('evens').innerHTML = numbersArray.filter(number => number%2 === 0);


/* Output Sum of Org. Array */

document.getElementById('sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);


/* Output Multiplied by 2 Array */

document.getElementById('multiplied').innerHTML = numbersArray.map((number) => number*2);

/* Output Sum of Multiplied by 2 Array */

let doubleArray = numbersArray.map((number) => number*2);

document.getElementById('sumOfMultiplied').innerHTML = doubleArray.reduce((sum, number) => sum + number, 0);