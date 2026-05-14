// Welcome message

window.onload = function () {
    alert("Welcome to Hustle Marketplace");
};



// Search functionality
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".hustle-card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let searchValue = searchInput.value.toLowerCase();

        cards.forEach(function(card) {
            let cardText = card.textContent.toLocaleLowerCase();

            if(cardText.includes(searchValue)){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// Post hustle form
const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        
        let confirmPost = confirm("Do you want to post this hustle");

        if(confirmPost){
            alert("Your hustle has been posted seccessfully");
            form.reset();
        }
    })
}
  


// Dark / ligth mode
const themeBtn = document.getElementById("themeBtn");

if(themeBtn){
    themeBtn.addEventListener("click", function(){
        document.body.classList.toggle("light-mode");
    });
}
