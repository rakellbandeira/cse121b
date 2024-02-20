

// EFFECT MARKED IN THE INGREDIENTS

    // Function to mark an element as active or inactive
    function markActive(elementId) {
      var targetElement = document.getElementById(elementId);

      // Check if the element exists
      if (targetElement) {
          // Toggle the class between 'active' and 'inactive'
          targetElement.classList.toggle('active');
          targetElement.classList.toggle('inactive');
      } else {
          console.error("Element with ID '" + elementId + "' not found.");
      }
    }

    // Add click event listeners to each div element
    for (var i = 1; i <= 32; i++) {
      var currentDiv = document.getElementById('div' + i);

      if (currentDiv) {
          currentDiv.addEventListener('click', function () {
              // Call the markActive function when clicked
              markActive(this.id);
          });
      } else {
          console.error("Element with ID 'div" + i + "' not found.");
      }
    }


// FUNCTION TO GET CONTENT FROM ACTIVE DIVS AND FILTER THROUGH THE FILES

function getContent() {
  // Get all div elements with class active
  var activeDivs = document.querySelectorAll('.active');

  //Array to store matching data
  var matchingData = [];

  //Loop through each active div
  activeDivs.forEach( function (div) {

    // get their text content
    var searchText = div.textContent;


    //List of the local JSON files
    var jsonFileNames = [
      "butter-cake.json",
      "cinnamon-almond-butter.json",
      "cinnamon-snack-mix.json",
      "crispy-chicken-with-soy-mayo-sauce.json",
      "egg-pie.json",
      "flour-tortillas-13590.json",
      "garlic-soup.json",
      "hamburgers-and-ketchup-gravy.json",
      "olive-oil-dip-for-italian-bread.json",
      "onion-bread-i.json",
      "Pumpkin-Stuffing-Bread.json",
      "rice-lasagna.json",
      "spiced-mayo.json",
      "sugar-peanuts.json"
    ];

    //Loop through the array
    jsonFileNames.forEach( function (jsonFileName) {
      //fetch the json file
      fetch(jsonFileName)
        .then(response => response.json())
        .then(data => {
          //Loop through each property in the json
          for (var key in data) {
            if (Array.isArray(data[key])) {

              //Check if the array contains the search text
              if (data[key].includes(searchText)) {

                //Add matching data to the new array
                matchingData.push({ file: jsonFileName, category: key, data: data[key]});

              }
            }
          }

          //log the matching data
/*           document.querySelector('.resultJavascript').textContent = `'Matching data for ' + ${searchText} + ' in ' + ${jsonFileName} + ':', ${matchingData}`;
 */        })

        .catch(error => console.error('Error fetching JSON:', error));
    });



  });
}

getContent();
document.querySelector('.resultJavascript').textContent = `'Matching data for ' + ${searchText} + ' in ' + ${jsonFileName} + ':', ${matchingData}`;
