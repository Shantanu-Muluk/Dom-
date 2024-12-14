const headerDiv = document.getElementById("header");
const subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online";
subHeading.style.fontStyle = "italic"; 
headerDiv.appendChild(subHeading);

const secondDiv = headerDiv.nextElementSibling;
const fruitsList = secondDiv.querySelector(".fruits");
const totalFruitsParagraph = document.createElement("p");
totalFruitsParagraph.textContent = "Total fruits: 4";
totalFruitsParagraph.id = "fruits-total"; 

secondDiv.insertBefore(totalFruitsParagraph, fruitsList);
