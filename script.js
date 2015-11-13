//add event listener to each div that changes background color to red upon "click"

var paintingCanvas = document.querySelector("#paintingCanvas");
// var pixels = document.querySelector(".square");
paintingCanvas.addEventListener("click", function (event) {
  if (event.target.style.backgroundColor === "white") {
    event.target.style.backgroundColor = "red";
  } else {
    event.target.style.backgroundColor = "white";
  }
});

//add event listener that sets paintbrush color

//add event listener that changes divs upon click
