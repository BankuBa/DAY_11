let increaseButton = document.querySelector(".increase");

let decreaseButton = document.querySelector(".decrease");

let resetButton = document.querySelector(".reset");

let numberCount = 0;

let number = document.querySelector(".number");

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (element) => {
    console.log(element.target.classList);
    let eClass = element.target.classList;

    if (eClass.contains("increase")) {
      numberCount++;
    } else if (eClass.contains("decrease")) {
      numberCount--;
    } else if (eClass.contains("reset")) {
      numberCount = 0;
    }
    number.textContent = numberCount;
    if (numberCount > 0) {
      number.style.color = "#6f0";
    } else if (numberCount < 0) {
      number.style.color = "#F00";
    } else {
      number.style.color = "black";
    }
  });
});

//ALTERNATIVELY ,

// increaseButton.addEventListener("click", () => {
//   numberCount += 1;
//   console.log(numberCount);
//   number.innerHTML = numberCount
// });

// decreaseButton.addEventListener("click", () => {
//   numberCount -= 1;
//     console.log(numberCount);
//   number.innerHTML = numberCount;
// });
// resetButton.addEventListener('click', () => {
//   numberCount = 0
//     number.textContent = numberCount;

// })
