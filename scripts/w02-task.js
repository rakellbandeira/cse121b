/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Rakell Bandeira';
let currentYear = '2024';
let profilePicture = 'images/Rakell.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
var foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
var imageElement = document.getElementsByTagName('img')[0];


/* Step 4 - Adding Content */
nameElement.innerHTML = fullName;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Image of ${fullName}`);




/* Step 5 - Array */

const favFood = ['Corn', 'Pizza', 'Lasagna', 'Peanut'];

foodElement.innerHTML = favFood.join(', ');

const singleFavFood = 'Fruits';

favFood.push(singleFavFood);

foodElement.innerHTML += `<br>${favFood.join(', ')}`;

/* foodElement.innerHTML += `<br>${favFood}`; */

favFood.shift();

foodElement.innerHTML += `<br>${favFood.join(', ')}`;

favFood.pop();

foodElement.innerHTML += `<br>${favFood.join(', ')}`;



