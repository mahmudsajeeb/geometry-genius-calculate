
// // get the card element
// const card = document.querySelector('.card');

// // set colors array
// const colors = ['#74b9ff', '#55efc4', '#a29bfe', '#6c5ce7', '#ff00ff',"#00b894", '#0984e3',"#d63031","#e17055" ];

// // random function 
// function randomColors() {
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// // Change the background color of the card when it's clicked
// card.addEventListener('click', function() {
//   const randomColor = randomColors();
//   card.style.backgroundColor = randomColor;
// });
// const cards = document.querySelectorAll('.card');
// const backgrounds = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']
//  Triangle get element by id 

let serial = 0;
document.getElementById("btn-triangle").addEventListener("click",function(){
  //b-inputField element 
  // set the serial number 
  // serial = serial + 1;
  serial +=1;
  const triangleTitle = document.getElementById("triandletitle").innerText;
  const bInputField = document.getElementById("b-inputField").value ;
  const hInputField = document.getElementById("h-inputField").value;
   // when input click input value will be  none
   document.getElementById("b-inputField").value =""
   document.getElementById("h-inputField").value =""
    // please input valid number 
    if (
      bInputField !== "string" && bInputField == "" || 
      hInputField !== "string" && bInputField == "" 
    ) {
      return alert("please enter any valid number");
    }
  // calculate the value

  const triangle = 0.5 *(parseInt(bInputField) * parseInt(hInputField));



  displayAllData(triangleTitle, triangle)
 
})

//  rectangle-btn get element bye id 

document.getElementById('rectangle-btn').addEventListener('click',function(){
  serial +=1;
  console.log("click")
  const reactangleTitle = document.getElementById("reactangleTitle").innerText;
  const rectangleInputW = document.getElementById("rectangleInputW").value ;
  const rectangleInputI = document.getElementById("rectangleInputI").value;
    // when input click input value will be  none
    document.getElementById("rectangleInputW").value =""
    document.getElementById("rectangleInputI").value =""
 
  // calculate the rectangle value

   // please input valid number 
    if (
      rectangleInputW !== "string" && rectangleInputW == "" || 
      rectangleInputI !== "string" && rectangleInputI == "" 
    ) {
      return alert("please enter any valid number");
    }
  const rectangle =  parseInt(rectangleInputW) * parseInt(rectangleInputI) ;
 
  // displayAllData from common function 
  displayAllData(reactangleTitle, rectangle);
})


// Parallelogram  get element bye id 

document.getElementById('parallelogram-btn').addEventListener('click',function(){
  serial +=1;
  console.log("click")
  const titleParallelogram = document.getElementById("title-parallelogram").innerText;
  const parallelogramA = document.getElementById("parallelogramA").innerText ;
  const parallelogramB = document.getElementById("parallelogramB").innerText;
    // input none
    parallelogramA.innerText = '';
    parallelogramB.innerText ='';
  // calculate the parallelogramCalculate value
  const parallelogramCalculate =  parseInt(parallelogramA) * parseInt(parallelogramB) ;
 
  // displayAllData from common function 
  displayAllData(titleParallelogram, parallelogramCalculate);
})
// rhombus get element by id ---------

document.getElementById('rhombus-btn').addEventListener('click',function(){
  serial +=1;
  console.log("click")
  const titleRhombus = document.getElementById("title-rhombus").innerText;
  const rhombusA = document.getElementById("rhombusA").innerText ;
  const rhombusB = document.getElementById("rhombusB").innerText;
    // input none
    rhombusA.innerText = '';
    rhombusB.innerText ='';
  // calculate the rhombusB value
  const  rhombusCalculate =  parseInt(rhombusA) * parseInt(rhombusB) ;
 
  // displayAllData from common function 
  displayAllData(titleRhombus, rhombusCalculate);
})

// pentagon section calculate get the element when button click 

document.getElementById('ellipse-btn').addEventListener('click',function(){
  serial +=1;
  console.log("click")
  const ellispeTitle = document.getElementById("ellipse-title").innerText;
  const ellipseA = document.getElementById("ellipseA").innerText ;
  const ellipseB = document.getElementById("ellipseB").innerText;
    // input none
    ellipseA.innerText = '';
    ellipseB.innerText ='';
  // calculate the pentagonA pentagonB value
  const  ellipseCalculate =  parseInt(ellipseA) * parseInt(ellipseB) ;
 
  // displayAllData from common function 
  displayAllData(ellispeTitle, ellipseCalculate);
})