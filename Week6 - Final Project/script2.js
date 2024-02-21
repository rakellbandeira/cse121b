
var activeIDS = [];


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
                                <picture>
                                    <img src="${recipeImageUrl}" alt="${recipetitle}">
                                </picture>
                                <div class="recipe-box-info">
                                    <div class="recipe-box-info-title">
                                        <h3>${recipetitle}</h3>
                                        <h5 class="recipe-url">${recipeUrl}</h5>
                                    </div>
                                </div> `;

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



    fetchAndProcessJSON(fileName)});

 */