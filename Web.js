// Create an object that maps button colors to image sources
const images = {
    "black": "Images/b1.png",
    "red": "Images/b3.png",
    "green": "Images/b2.png"
  };
  
  // Get the button and image elements from the DOM
  const blackBtn = document.querySelector("#black");
  const redBtn = document.querySelector("#red");
  const greenBtn = document.querySelector("#green");

  const image = document.querySelector(".try");
  
  // Add a click event listener to the button
  blackBtn.addEventListener("click", () => {
    changeImage(images["black"]);
  });
  
  redBtn.addEventListener("click", () => {
    changeImage(images["red"]);
  });
  
  greenBtn.addEventListener("click", () => {
    changeImage(images["green"]);
  });

   // Function to change the image source
function changeImage(src) {
    image.src = src;
  }

  // Set the initial image source
changeImage(images["black"]);


// set the initial image source

// select_colour.onclick();