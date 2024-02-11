/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    
    temples.forEach((temple) =>{

        //Create an HTML <article> element (createElement).
        const articleElem = document.createElement('article');

        //Create an HTML <h3> element
        const h3Elem =  document.createElement('h3');

        //add the temple's templeName property to this new element. 
        h3Elem.textContent = temple.templeName;

        //Create an HTML <img> element 
        const imgElem = document.createElement('img');

        //add the temple's imageUrl property to the src attribute 
        // and the temple's location property to the alt attribute. 
        const urls = temple.imageUrl;
        imgElem.src = urls;
        imgElem.alt = temple.location;

        //Append the <h3> element and the <img> element to the <article>
        // element as children. (appendChild)
        articleElem.appendChild(h3Elem);
        articleElem.appendChild(imgElem);

        //Append the <article> element to the global templesElement 
        //variable declared in Step 2. 
        templesElement.appendChild(articleElem);


    });
};

/* async getTemples Function using fetch()*/

const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";


//Create another function expression called 
//getTemples. Make it an async anonymous, arrow function. 
const getTemples = async () => {

    let response = await fetch(url);

    //Convert your fetch response into a JavaScript object (.json) 
    //assign the result to the templeList global array variable
    // you declared in Step 3 above.
    templeList = await response.json();
    
    //calls the displayTemples function and passes it the list
    // of temples (templeList). 
    displayTemples(templeList);
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */

function filterTemples (temples) {
    reset();
    const filter = document.getElementById('filtered').value;

    switch (filter)
    {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;

        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;

        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case 'all':
        default:
            displayTemples(temples);
            break;

    }
}



/* Event Listener */

document.querySelector('#filtered').addEventListener("change", () => { 
    filterTemples(templeList)
});


getTemples();