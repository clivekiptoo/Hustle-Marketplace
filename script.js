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