const cards = document.getElementsByClassName("card");
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
      window.location.href = "/benchpress"
   }
}





