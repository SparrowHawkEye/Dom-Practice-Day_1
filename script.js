'strict mode'
//! Task 1
console.log('YEAH! I am Connected with HTML File')

//! Task 2
const h2Tag = document.querySelectorAll("h2");
for (const h2 of h2Tag){
h2.style.color = "lightblue";}

//! task 3
const backpackContainer = document.getElementById("backpack")
// console.log(backpackContainer);
backpackContainer.style.setProperty ('background-color',"tomato",'important');

//! task 4
const cards = document.getElementsByClassName("card")
for (const card of cards){
  card.style.borderRadius = "30px"}

//! task 5
const btnSeeAll = document.getElementById("see-all")

btnSeeAll.addEventListener('click', function(){
  console.log("Yeah!! See All Button Clicked")
})
//!Task 6
const btnBuys = document.
getElementsByClassName("buy-now");


for(const btnBuy of btnBuys)
{
  btnBuy.addEventListener('click', function(){
    btnBuy.remove()
  })
}

//!Task 7
const btnSubmit = document.getElementById("submit");
const inputField = document.getElementById('input-field')

inputField.addEventListener('keyup', function(event){
  if(event.target.value == "email"){
    btnSubmit.removeAttribute("disabled");
  }else{
    btnSubmit.setAttribute("disabled", true);
  }
})


//! Task 8
const shoe1 = document.getElementById("shoe1");

shoe1.addEventListener("mouseover", function(){
  shoe1.src= "images/categories/shoes.png"
})
shoe1.addEventListener("mouseleave", function(){
  shoe1.src = "images/shoes/shoe-1.png"
})

//! Task 9
const keepTouch =  document.getElementById("keep-in-touch")

keepTouch.addEventListener("dblclick", function(){
  keepTouch.style.backgroundColor = "khaki";
  
})