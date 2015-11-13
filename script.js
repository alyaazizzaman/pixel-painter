var paintingCanvas = document.querySelector("#paintingCanvas");
//add event listener that sets paintbrush color
var colorPalette = document.querySelector("#palette");
colorPalette.addEventListener("click", function (event)  {
  if (event.target.style.backgroundColor === "red") {
    paintingCanvas.addEventListener("click", function (event) {
      if (event.target.style.backgroundColor !== "red") {
        event.target.style.backgroundColor = "red";
      }
    })
  } else if (event.target.style.backgroundColor === "purple") {
      paintingCanvas.addEventListener("click", function (event) {
          event.target.style.backgroundColor = "purple";
        });
  };
});

//add event listener that changes divs upon click
