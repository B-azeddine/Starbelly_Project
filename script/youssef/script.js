let slide = document.getElementById("slide");
let menuSlide = document.getElementsByClassName("menu-slide2")[0];
let cardSlide = document.getElementsByClassName("card-slide")[0];

function shop() {
  if (cardSlide) {
    // Close menuSlide if open
    if (menuSlide.classList.contains("menu-slide")) {
      menuSlide.classList.toggle("menu-slide");
      menuSlide.classList.toggle("menu-slide2");
      console.log("Cancel menu");
    }

    // Toggle cardSlide
    cardSlide.classList.toggle("card-slide");
    cardSlide.classList.toggle("card-slide2");
    console.log(
      cardSlide.classList.contains("card-slide") ? "click" : "Cancel"
    );
  }
  console.log("click shop");
}
slide.addEventListener("click", () => {
  if (menuSlide) {
    if (cardSlide.classList.contains("card-slide2")) {
      cardSlide.classList.toggle("card-slide");
      cardSlide.classList.toggle("card-slide2");
    }
    menuSlide.classList.toggle("menu-slide");
    menuSlide.classList.toggle("menu-slide2");
    console.log(
      menuSlide.classList.contains("menu-slide") ? "click" : "Cancel"
    );
  }
});
