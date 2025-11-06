//VARIABLES
const findBtn = document.querySelector(".findBtn-btn");
const completedBtn = document.querySelector(".completed-btn");
const findBtnContainer = document.querySelector(".findBtnContainer");
const closeBtn = document.querySelector(".close-btn");

//EVENT LISTENERS
findBtn.addEventListener("click",function(){
  findBtnContainer.style.display= "none";
  completedBtn.classList.add("completed-btn-afterClick");
})

closeBtn.addEventListener("click",function(){
  completedBtn.classList.remove("completed-btn-afterClick");
  findBtnContainer.style.display= "block";
})