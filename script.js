const cards = document.getElementsByClassName("card");
const modal = document.getElementById("modalContainer");
const overlay = document.getElementById("overlay");
function selectTab(tabIndex) {
   
   for (i = 0; i < cards.length; i++){
      cards[i].style.display = "none";
   }

   for (i = 0; i < document.getElementsByClassName(`tab${tabIndex}`).length; i++){
      const element = document.getElementsByClassName(`tab${tabIndex}`)
      element[i].style.display = "block";
      document.getElementById(`button${tabIndex}`).focus();
   }
}



function cardUrls(index, muscleGroup) {
   if (muscleGroup === "tab2") {
      if (index === 1) {
         modal.style.visibility = "visible";
         overlay.classList.add("active")
      }
   }
}

function closeButton() {
   const button = document.getElementById("closeButton");
   button.addEventListener("click", () => {
      modal.style.visibility = "hidden";
      overlay.classList.remove("active");
   })
}

function closeWindow() {
   overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      modal.style.visibility = "hidden";
   })
}







