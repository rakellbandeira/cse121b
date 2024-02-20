

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
              checkIngredients();
          });
      } else {
          console.error("Element with ID 'div" + i + "' not found.");
      }
    }


// FUNCTION TO GET CONTENT FROM ACTIVE DIVS AND FILTER THROUGH THE FILES

function checkIngredients() {
  // Get all div elements with class "active"
  var activeDivs = document.querySelectorAll('.active');

  activeDivs.forEach( function (div) {
      var searchText = div.textContent;

      var matchingData = [];

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

      jsonFileNames.forEach(function (jsonFileName) {

          fetch(jsonFileName)
              .then(response => response.json())
              .then(data => {
                  for (var key in data) {

                      
                          var recipeIngredients = data['recipe']['tags'];
                          var isIngredientPresent = recipeIngredients.includes(searchText);
                          matchingData.push({ file: jsonFileName, category: key, data: data[key] });

                          var amountRecipes = matchingData.length;

                          // Log the result
                          if(isIngredientPresent){
                            /* document.querySelector('.result').textContent += `Ingredient '${searchText}' is ${isIngredientPresent ? 'present' : 'not present'} in the ${jsonFileName} recipe.`; */
                            document.querySelector('.result').textContent = `We found ${amountRecipes} recipes!` ;

                            matchingData.forEach( function (data) {
                              var eachData = data[file];
                              document.querySelector('.resultJavascript').textContent = `We found ${eachData} recipe.`;
                            })
                            
                          } else {
                            document.querySelector('.result').textContent += ``;
                          }
                          
                     
                      
                  }

                  /* console.log('Matching data for ' + searchText + ' in ' + jsonFileName + ':', matchingData); */
                  console.log(matchingData);
              })
              .catch(error => console.error('Error fetching JSON:', error));
      });
  });

}


checkIngredients();
