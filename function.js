var screen = document.getElementById("screenNumber");
buttons = document.querySelectorAll("button");
console.log(buttons);

var screenValue = "";

for (i of buttons) {
  i.addEventListener("click", (operation) => {
    var buttonText = operation.target.innerText;
    console.log(buttonText);
    if (buttonText === "X") {
      buttonText = "*";
      screenValue += buttonText;
      screenNumber.value = screenValue;
    } else if (buttonText === "C") {
      screenValue = "";
      screenNumber.value = screenValue;
    } else if (buttonText === "=") {
      screenNumber.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screenNumber.value = screenValue;
    }
  });
}
