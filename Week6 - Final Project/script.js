

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
for (var i = 1; i <= 22; i++) {

  var currentDiv = document.getElementById('div' + i);

  if (currentDiv) {
    currentDiv.addEventListener('click', function () {
              // Call the markActive function when clicked
    markActive(this.id);

             //for each json string in the jsonFileNames: fetchAndPro
              /* Promise.all(jsonFileNames.map(fileName => fetchAndProcessJSON(fileName))); */
              /* .then(() => {
                  // Now, allIngredients contains the copied ingredients from all JSON files
                  console.log('All ingredients:', allIngredients); */
              

               
 });
    } else {
          console.error("Element with ID 'div" + i + "' not found.");
    }
    }



function processJSONFiles() {
  const jsonFileNames = [
    'recipe1.json',
    'recipe2.json',
    'recipe3.json',
    'recipe4.json',
    'recipe5.json',
    'recipe6.json',
    'recipe7.json',
    'recipe8.json',
    'recipe9.json',
    'recipe10.json',
    'recipe11.json',
    'recipe12.json',
    'recipe13.json'
  ];
  
  // Get all active list items
  const activeListItems = document.querySelectorAll('.active');
  
  // Function to fetch and process each JSON file
  async function fetchAndProcessJSON(fileName) {
      try {
          const response = await fetch(fileName);
          const jsonData = await response.json();
  
          // Check if the JSON structure is as expected
          if (jsonData.recipe && jsonData.recipe.tags && Array.isArray(jsonData.recipe.tags)) {
              // Check if any active list item matches any tag in the JSON file
              activeListItems.forEach(activeListItem => {
                  const ingredient = activeListItem.textContent.toLowerCase(); // Convert to lowercase for case-insensitive comparison
                  if (jsonData.recipe.tags.includes(ingredient)) {
                      // Display title and directions arrays in the console
                      console.log('Title:', jsonData.recipe.title);
                      console.log('Directions:', jsonData.recipe.directions);
                  }
              });
          } else {
              console.error(`Invalid JSON structure in ${fileName}`);
          }
      } catch (error) {
          console.error(`Error fetching or processing ${fileName}:`, error);
      }
  }
  
  // Use Promise.all to fetch and process all JSON files concurrently
  Promise.all(jsonFileNames.map(fileName => fetchAndProcessJSON(fileName)))
      .then(() => {
          // Finished processing all JSON files
      });
}

processJSONFiles();

