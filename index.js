const cards = document.querySelectorAll(".card");
const nextButtons = document.querySelectorAll(".next-button");
let currentIndex = 0;

function updateCards() {
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.classList.add("card-visible");
      card.classList.remove("card-hidden");
    } else {
      card.classList.add("card-hidden");
      card.classList.remove("card-visible");
    }
  });
}

function handleClick(event) {
  const index = parseInt(event.target.getAttribute("data-index"), 10);
  currentIndex = (index + 1) % cards.length;
  updateCards();
}

nextButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

updateCards();
