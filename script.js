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
  } else if (event.target.style.backgroundColor === "orange") {
      paintingCanvas.addEventListener("click", function (event) {
          event.target.style.backgroundColor = "orange";
        });
  } else if (event.target.style.backgroundColor === "yellow") {
      paintingCanvas.addEventListener("click", function (event) {
          event.target.style.backgroundColor = "yellow";
        });
  } else if (event.target.style.backgroundColor === "blue") {
      paintingCanvas.addEventListener("click", function (event) {
          event.target.style.backgroundColor = "blue";
        });
  } else if (event.target.style.backgroundColor === "green") {
      paintingCanvas.addEventListener("click", function (event) {
          event.target.style.backgroundColor = "green";
        });
  } else if (event.target.style.backgroundColor === "white") {
      paintingCanvas.addEventListener("click", function (event) {
          event.target.style.backgroundColor = "white";
        });
  } else if (event.target.style.backgroundColor === "black") {
      paintingCanvas.addEventListener("click", function (event) {
          event.target.style.backgroundColor = "black";
      })
  } else if (event.target.style.backgroundColor === "brown") {
      paintingCanvas.addEventListener("click", function (event) {
          event.target.style.backgroundColor = "brown";
      })
    };
});

//add event listener that changes divs upon click
