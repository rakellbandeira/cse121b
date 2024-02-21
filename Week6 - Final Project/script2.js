
var activeIDS = [];
// EFFECT MARKED IN THE INGREDIENTS

const JsonFileNames = [
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

// Function to switch bak to menu to my pantry
function toggleDisplay(elementId) {
    var targetElement = document.getElementById(elementId);

    targetElement.classList.toggle('inactivemenu');
    targetElement.classList.toggle('activemenu');

    /* var menuOption = document.getElementById('pantry');
    var pantryOption = document.getElementById('recipe-area');

    if (menuOption.classList = 'activemenu') {

        pantryOption.classList = 'inactivemenu';
    } else {
        pantryOption.classList = 'activemenu';
    } */

}






    // Function to mark an element as active or inactive
function markActive(elementId) {
      var targetElement = document.getElementById(elementId);

      
      // Check if the element exists
      if (targetElement) {
          // Toggle the class between 'active' and 'inactive'
            targetElement.classList.toggle('active');
            targetElement.classList.toggle('inactive');


            // Check if the element is now active
            if (targetElement.classList.contains('active')) {
                // Add the element to the array
                activeIDS.push(targetElement);

                // Display the text content in the console
                console.log('Element marked as active:', targetElement.textContent);

                processingJSONFiles();
                
                /* activeIDS.forEach(element => {
                    console.log(`Marcados: ${element.textContent}`);
                }); */

                
            } else {
                // Remove the element from the array if it's inactive
                const index = activeIDS.indexOf(targetElement);
                if (index !== -1) {
                    activeIDS.splice(index, 1);
                }
            }
        } else {
            console.error("Element with ID '" + elementId + "' not found.");
        }
}





async function processingJSONFiles()
{
  
        for (const jsonFileName of JsonFileNames) {
            try {
                const response = await fetch(jsonFileName);

                if (!response.ok) {
                    throw new Error(`Failed to fetch ${jsonFileName}`);
                }

                const jsonData = await response.json();

                const tagsArray = jsonData.recipe.tags; //beautiful!

                activeIDS.forEach( id => {
                       
                    if (tagsArray.includes(id.textContent.trim())) {
                        
                        

                        var recipeImageUrl = jsonData.recipe.image;
                        var recipetitle = jsonData.recipe.title;
                        var recipeUrl = jsonData.recipe.url;

                        

                        const boxesContainer = document.getElementById('recipes');
                            
                        const boxes = document.createElement('div');

                        boxes.innerHTML = `
                            <a href="/recipe-page.html">
                                <picture>
                                    <img src="${recipeImageUrl}" alt="${recipetitle}">
                                </picture>
                                <div class="recipe-box-info">
                                    <div class="recipe-box-info-title">
                                        <h3>${recipetitle}</h3>
                                        <h5 class="recipe-url">${recipeUrl}</h5>
                                    </div>
                                </div>
                            </a> `;

                        boxesContainer.appendChild(boxes);
                        

                        /* console.log(`This element is contained in the ${jsonFileName} tag array`); */
                    }
                })

                console.log(`Tags in ${jsonFileName}`, tagsArray);
            } catch (error) {
                console.error(`Error processing ${jsonFileName}:`, error);
            }
        }
    

} 






/////////////////////////////////////////////////////////////////////


/* async function processJsonFiles() {

    
    for (const jsonFileName of JsonFileNames) {
        try {
            const response = await fetch(jsonFileName);

            if (!response.ok) {
                throw new Error(`Failed to fetch ${jsonFileName}`);
            }

            const jsonData = await response.json();

            const tagsArray = jsonData.recipe.tags; //beautiful!

            console.log(`Tags in ${jsonFileName}`, tagsArray);
        } catch (error) {
            console.error(`Error processing ${jsonFileName}:`, error);
        }
    }
}
 */

/* processJsonFiles(); */




///////////////////////////////////////////////////////////////////////


/* function processJsonFile(jsonFileName) {

    console.log("Iniciando processo de fetching");

    var jsonFilePath = './'+jsonFileName; */



    /* console.log(jsonFilePath); */




    /* fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            var tagsArray = data.recipe.tags;

            tagsArray.forEach( tag => {
                console.log(tag);
            })
            

            var matchingTags = tagsArray.filter(tag => activeIDS.includes(tag));

            if(matchingTags.length > 0) {
                console.log('Match found in file:', jsonFileName);
                console.log('Title:', data.recipe.title);
                console.log('Directions:', data.recipe.directions);
                console.log('---------------------');
            }
        })
        .catch(error => {
            console.error('Error fetching or processing JSON file:', jsonFileName, error);
        });
} */


  

/* JsonFileNames.forEach(jsonFileName => {
    // Process each JSON file
    processJsonFile(jsonFileName);
  });
 */














  
  // Function to fetch and process each JSON file
/* async function fetchAndProcessJSON(fileName) {

    activeIDS.forEach( id => {
        console.log('Element array:', id.textContent);
    })
    

      try {
          const response = await fetch(fileName);
          const jsonData = await response.json();
  
          // Check if the JSON structure is as expected
          if (jsonData.recipe && jsonData.recipe.tags && Array.isArray(jsonData.recipe.tags)) {
              // Check if any active list item matches any tag in the JSON file
              activeIDS.forEach(activeListItem => {

                  const ingredient = activeListItem.textContent; // Convert to lowercase for case-insensitive comparison
                  
                  if (jsonData.recipe.tags.includes(ingredient)) {
                      // Display title and directions arrays in the console
                      console.log('Title:', jsonData.recipe.title);
                      console.log('Directions:', jsonData.recipe.directions);

 */

                      
                      /* var element = document.getElementsByClassName('recipe-box');
                      element.innerHTML = "";
                      element.innerHTML = `
                      <picture>
                        <img src="${jsonData.recipe.image}" alt="${jsonData.recipe.title}">
                      </picture>
                      <div class="recipe-box-info">
                        <div class="recipe-box-info-title">
                        <h3>${jsonData.recipe.title}</h3>
                        <h5 class="recipe-url">${jsonData.recipe.url}</h5>
                      </div>
                    </div>`; */
/* 



                   }
              });
          } else {
              console.error(`Invalid JSON structure in ${fileName}`);
          }
      } catch (error) {
          console.error(`Error fetching or processing ${fileName}:`, error);
      }
}  */
  
  // Use Promise.all to fetch and process all JSON files concurrently
/* jsonFileNames.map(fileName => {
    fetchAndProcessJSON(fileName)});

 */