let increaseButton = document.querySelector(".increase");
let decreaseButton = document.querySelector(".decrease");

let numberCount = 0;

let number = document.querySelector('.number')
increaseButton.addEventListener("click", () => {
  numberCount += 1;
  console.log(numberCount);
  number.innerHTML = numberCount
});

decreaseButton.addEventListener("click", () => {
  numberCount -= 1;
    console.log(numberCount);
  number.innerHTML = numberCount;
});
