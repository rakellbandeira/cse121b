

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


function loopThroughIDs() {

  for (var i = 1; i <= 22; i++) {

    var currentDiv = document.getElementById('div' + i);
  
    if (currentDiv) {
      currentDiv.addEventListener('click', function () {
                // Call the markActive function when clicked
      markActive(this.id);
  
                            
        });
      }
}
}




loopThroughIDs();


