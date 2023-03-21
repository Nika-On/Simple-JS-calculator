//defining variables
const number = document.querySelectorAll("button");
const screen = document.querySelector(".display-tab");
const iconDay = document.querySelector("#active");
const iconNight = document.querySelector("#passive");
const body = document.querySelector("body");
const modeText = document.querySelector(".mode-text")
let value;
let result = "";
//extracting values from buttons and calculating result after clicking "="
number.forEach((element) => {
  element.addEventListener("click", () => {
    value = element.textContent;
    if (value === "=") {
      result = eval(result);
      screen.textContent = result;
    } else if (value === "C") {
      screen.textContent = "";
      result = "";
    } else {
      result += value;
      screen.textContent = result;
    }
  });
});
//switching to daymode and vise versa
iconDay.addEventListener("click",()=>{
        iconDay.removeAttribute("id","active");
        iconDay.setAttribute("id","passive");
        iconNight.setAttribute("id","active");
        body.style.backgroundColor = "#12D8FA";
        modeText.textContent = "Switch to Night mode";
        number.forEach(
            (element)=>{
                element.classList.add("DayMode")
            }
        );
        screen.classList.add("DayMode")
});
iconNight.addEventListener("click",()=>{
    iconNight.removeAttribute("id","active");
    iconDay.setAttribute("id","active");
    iconNight.setAttribute("id","passive")
    body.style.backgroundColor = "#141313";
    modeText.textContent = "Switch to Day mode";
    number.forEach(
        (element)=>{
            element.classList.remove("DayMode")
        }
    );
    screen.classList.remove("DayMode")
});

