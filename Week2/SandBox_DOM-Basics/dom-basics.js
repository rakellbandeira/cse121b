const newParagraph = document.createElement('p');
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);


const newImage = document.createElement('img');
newImage.setAttribute('src', "https://picsum.photos/200");
newImage.setAttribute('alt', 'Img added with JavaScript');
document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const sect = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = "CSE 121b";
sect.appendChild(h2);
const parag = document.createElement('p');
parag.innerText = "Welcome to Javascript Language";
sect.appendChild(parag);
/* sect.appendChild(h2, parag); */
document.body.appendChild(sect);

/*Or like this:
const sect = document.createElement('section');
sect.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(sect);
*/







































