// get the card element
const card = document.querySelector('.card');

// set colors array
const colors = ['#74b9ff', '#55efc4', '#a29bfe', '#6c5ce7', '#ff00ff',"#00b894", '#0984e3',"#d63031","#e17055" ];

// random function 
function randomColors() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Change the background color of the card when it's clicked
card.addEventListener('click', function() {
  const randomColor = randomColors();
  card.style.backgroundColor = randomColor;
});
const cards = document.querySelectorAll('.card');
const backgrounds = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];








// get the second card element
const second = document.querySelector('.second');

// set colors array
const colorss = ['#74b9ff', '#55efc4', '#a29bfe', '#6c5ce7', '#ff00ff',"#00b894", '#0984e3',"#d63031","#e17055" ];

// random function 
function randomColors() {
  return colorss[Math.floor(Math.random() * colorss.length)];
}

// Change the background color of the card when it's clicked
second.addEventListener('click', function() {
  const randomColor = randomColors();
  second.style.backgroundColor = randomColor;
});
const cardss = document.querySelectorAll('.second');
const backgroundss = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];



// get the third card element
const third = document.querySelector('.third');

// set colors array
const thirdColor = ['#74b9ff', '#55efc4', '#a29bfe', '#6c5ce7', '#ff00ff',"#00b894", '#0984e3',"#d63031","#e17055" ];

// random function 
function randomColors() {
  return thirdColor[Math.floor(Math.random() * thirdColor.length)];
}

// Change the background color of the card when it's clicked
third.addEventListener('click', function() {
  const randomColor = randomColors();
  third.style.backgroundColor = randomColor;
});
const cardthird = document.querySelectorAll('.third');
const backgroundthird = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];





// get the forth card element
const forth = document.querySelector('.forth');

// set colors array
const forthColor = ['#74b9ff', '#55efc4', '#a29bfe', '#6c5ce7', '#ff00ff',"#00b894", '#0984e3',"#d63031","#e17055" ];

// random function 
function randomColors() {
  return forthColor[Math.floor(Math.random() * forthColor.length)];
}

// Change the background color of the card when it's clicked
forth.addEventListener('click', function() {
  const randomColor = randomColors();
  forth.style.backgroundColor = randomColor;
});
const cardForth = document.querySelectorAll('.forth');
const backgroundForth = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];


// get the five card element
const five = document.querySelector('.five');

// set colors array
const fiveColor = ['#74b9ff', '#55efc4', '#a29bfe', '#6c5ce7', '#ff00ff',"#00b894", '#0984e3',"#d63031","#e17055" ];

// random function 
function randomColors() {
  return fiveColor[Math.floor(Math.random() * fiveColor.length)];
}

// Change the background color of the card when it's clicked
five.addEventListener('click', function() {
  const randomColor = randomColors();
  five.style.backgroundColor = randomColor;
});
const cardForthFive = document.querySelectorAll('.five');
const backgroundFive = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];

// get the five card element
const six = document.querySelector('.six');

// set colors array
const sixColor = ['#74b9ff', '#55efc4', '#a29bfe', '#6c5ce7', '#ff00ff',"#00b894", '#0984e3',"#d63031","#e17055" ];

// random function 
function randomColors() {
  return sixColor[Math.floor(Math.random() * sixColor.length)];
}

// Change the background color of the card when it's clicked
six.addEventListener('click', function() {
  const randomColor = randomColors();
  six.style.backgroundColor = randomColor;
});
const cardForthsix = document.querySelectorAll('.six');
const backgroundsix = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];


//common function displayData to create commit the item in the calculation area
 
function displayAllData(triangleTitle,triangle){
  const tableContainer = document.getElementById("table-container");
let tr = document.createElement("tr");

tr.innerHTML =`
  <td>${serial}.${triangleTitle}</td> 
  <td>${triangle}cm<sup>2</sup></td>  
  <td> <button  class=' px-6 py-2 text-2x font-bold text-white rounded bg-blue-500 convert'  >ConvetM<sup>2</sup></button></td>  
  <td><button class=' px-6 py-2 text-2x font-bold text-white rounded bg-blue-500 deletebtn'>Delete</button></td>  
`

   
tableContainer.appendChild(tr);

 

// clear button declearation 
const elements = document.querySelectorAll(".deletebtn");

for (const value of elements) {
  value.addEventListener("click", function (e) {
    // console.log(event.target.parentNode.parentNode);
    e.target.parentNode.parentNode.style.display = "none";
  });
}
 
}
 