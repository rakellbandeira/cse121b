myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  /* let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3]; */

  // Activity 1 and 2
  const foodsElement = document.getElementById("favorite-foods");
  const placeElement = document.getElementById("places-lived");

  /* myInfo.favoriteFoods.forEach(function(food) {
    const liItem = document.createElement("li");
    liItem.textContent = food;    
    foodsElement.append(liItem);
  }); */

  //using the map function:
  /* const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
  foodsElement.innerHTML = foodListElements.join(""); */

  //or even simpler:
/*   document.getElementById("favorite-foods").innerHTML = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`).join("");
 */  

  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
/*   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4); */


// Activity 3

//3.1
/* function foodString(food) {
    return `<li>${food}</li>`;
} */

//3.2


/* function placeString(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}; */

//3.3

/* myInfo.placesLived.forEach(function (place) {
    const placeHtml = placeString(place);
    placeElement.innerHTML = placeHtml.join('');
});
 */

function contentList(list, callbackFunction) {
    const htmlList = list.map (callbackFunction);
    return htmlList.join("");
}


function foodString(food) {
    return `<li>${food}</li>`;
};

function placeString(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
};



foodsElement.innerHTML = contentList(myInfo.favoriteFoods, foodString);

placeElement.innerHTML = contentList(myInfo.placesLived, placeString);





