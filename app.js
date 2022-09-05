let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(element) {
  element.addEventListener("click", function(event) {
    const classes = event.currentTarget.classList;

    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count === 0) {
      value.style.color = "#222";
    } else if (count < 0) {
      value.style.color = "red";
    }

    value.textContent = count;
  })
});