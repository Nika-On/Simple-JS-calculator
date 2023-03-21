const number = document.querySelectorAll("button");
const screen = document.querySelector(".display-tab");
let value;
let result = "";
number.forEach((element) => {
  element.addEventListener("click", () => {
    value = element.textContent;
    if (value === "=") {
      result = eval(result);
      screen.textContent = result;
    } else if (value === "C") {
        screen.textContent = "";
    } else {
      result += value;
      screen.textContent = result;
    }
  });
});
