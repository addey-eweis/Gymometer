const cardBackground = document.getElementById("workout");
const cardsContainer = document.getElementById("workoutsGrid").offsetHeight;
const workoutGrid = document.getElementById("workoutsGrid");


cardBackground.style.height = `${cardBackground.offsetHeight + cardsContainer}px`;
workoutGrid.style.visibility = "hidden";

if (workoutGrid.style.visibility === "hidden") {
   cardsContainer.style.height = "0"
   cardBackground.style.height = "20vh"
}








document.getElementById("chest").addEventListener("click", function () {
   let cards = document.getElementsByClassName("card");
   workoutGrid.style.visibility = "visible";
   for (var i = 0; i < cards.length; i++) {
      cards[i].textContent = `he`;
   }
 });

document.getElementById("back").addEventListener("click", function () {
   let cards = document.getElementsByClassName("card");
   for (var i = 0; i < cards.length; i++) {
      cards[i].textContent = `${document.getElementById()}`;
   }
 });

 document.getElementById("biceps").addEventListener("click", function() {
    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
       cards[i].textContent = `${document.getElementById()}`;
    }
 });

document.getElementById("triceps").addEventListener("click", function () {
    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
       cards[i].textContent = `${document.getElementById()}`;
    }
});
document.getElementById("shoulders").addEventListener("click", function () {
    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
       cards[i].textContent = `${document.getElementById()}`;
    }
});

document.getElementById("forearms").addEventListener("click", function () {
    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
       cards[i].textContent = `${document.getElementById()}`;
    }
});

document.getElementById("legs").addEventListener("click", function () {
    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
       cards[i].textContent = `${document.getElementById()}`;
    }
});
 






