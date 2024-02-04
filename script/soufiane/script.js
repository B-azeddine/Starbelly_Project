let dishesImgs = document.querySelectorAll(
  "section.dishes .second .box .img img"
);
let firstIcon = document.querySelector(
  "section.dishes .first .icons-button .icons .left img"
);
let secondIcon = document.querySelector(
  "section.dishes .first .icons-button .icons .right img"
);
let tag = document.querySelector("section.dishes .second .box .img div.tag");
let tagText = document.querySelector(
  "section.dishes .second .box .img div.tag span"
);
let tagI = document.querySelector("section.dishes .second .box .img div.tag i");
console.log(tagText.innerHTML);

console.log(dishesImgs);
console.log(firstIcon);
console.log(secondIcon);

let x = 1;

// let path1 = "images/soufian/dish_5_after.jpg";
// let path2 = "images/soufian/dish_6_after.jpg";
// let path3 = "images/soufian/dish_1.jpg";
// let path4 = "images/soufian/dish_8_after.jpg";

// secondIcon.addEventListener("click", () => {
//   // dishesImgs[0].classList.add("remove-img");
//   // dishesImgs[1].classList.add("remove-img");
//   // dishesImgs[2].classList.add("remove-img");
//   // dishesImgs[3].classList.add("remove-img");
//   //
//   dishesImgs[0].src = path1;
//   dishesImgs[1].src = path2;
//   dishesImgs[2].src = path3;
//   dishesImgs[3].src = path4;
// });

secondIcon.addEventListener("click", () => {
  for (let i = 0; i < dishesImgs.length; i++) {
    if (i % 2 == 0) {
      dishesImgs[i].classList.remove("add-img");
      dishesImgs[i].classList.add("remove-img");
    } else {
      dishesImgs[i].classList.add("add-img");
      dishesImgs[i].classList.remove("remove-img");
    }
  }
  // tag changes
  tagText.innerHTML = "Sweet";

  tag.removeAttribute("id");
  tag.id = "sweet";

  tagI.classList.remove("bxs-leaf");
  tagI.classList.add("bx-bowl-hot");
});

firstIcon.addEventListener("click", () => {
  for (let i = 0; i < dishesImgs.length; i++) {
    if (i % 2 == 0) {
      dishesImgs[i].classList.add("add-img");
      dishesImgs[i].classList.remove("remove-img");
    } else {
      dishesImgs[i].classList.remove("add-img");
      dishesImgs[i].classList.add("remove-img");
    }
  }
  // tag changes
  tagText.innerHTML = "Vegan";

  tag.removeAttribute("id");
  tag.id = "vegan";
  tagI.classList.add("bxs-leaf");
  tagI.classList.remove("bx-bowl-hot");
});

// console.log(dishesImgs[0].src);

// dishesImgs[0].src = "images/soufian/dish_3.jpg";
