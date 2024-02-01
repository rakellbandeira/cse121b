/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Rakell Bandeira",
    photo: "images/Rakell.jpg",
    favoriteFoods: [
        "corn",
        "cheese pizza",
        "fried chicken",
        "lasagna"
    ],
    hobbies: [
        "reading",
        "drawing",
        "playing piano",
        "binge watching",
        "singing"
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Alvorada, MAO",
        length: "22 years"
    },
    {
        place: "Ajuricaba, MAO",
        length: "6 years"

    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach( food => {
    let liItem = document.createElement("li");
    liItem.textContent = food;
    document.getElementById("favorite-foods").appendChild(liItem);
})

/* Hobbies List */

myProfile.hobbies.forEach( hobby => {
    let liItem2 = document.createElement("li");
    liItem2.textContent = hobby;
    document.getElementById("hobbies").appendChild(liItem2);
})

/* Places Lived DataList */


for (let elem of myProfile.placesLived) {
    let dtItem = document.createElement("dt");
    dtItem.textContent = elem.place;
    let ddItem = document.createElement("dd");
    ddItem.textContent = elem.length;
    document.querySelector("#places-lived").appendChild(dtItem);
    document.querySelector("#places-lived").appendChild(ddItem);
};
