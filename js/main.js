const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slider > img");
const miniPrevBtn = document.querySelector(".slidermini .prev-btn");
const miniNextBtn = document.querySelector(".slidermini .next-btn");
const miniSlides = document.querySelectorAll(".slidermini > img");
const gender = document.querySelector("#gender");
const birth = document.querySelector("#birth");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const genderList = document.querySelector(".genders-list");
const liGenders = document.querySelectorAll(".genders-item");
const btnFile = document.querySelector(".btn-input-file");
const btnSubmit = document.querySelector(".submit");


document.addEventListener('click', e => {
  const target = e.target;

  if (target.classList.contains('gender')) {
    genderList.classList.add('open');
  }

  if (target.classList.contains('genders-item')) {
    genderList.classList.remove('open');
    gender.value = target.textContent;
    block2.style.visibility="visible";
  }
})



btnFile.onclick = function(){
  document.querySelector(".file-list").style.visibility = "visible";
  btnSubmit.disabled = false;
}

btnSubmit.onclick = function(){
  btnSubmit.disabled = true;
  document.querySelector(".completed").style.display = "inline-block";
  btnFile.disabled = true;
}


birth.oninput = function(){
  block3.style.visibility="visible";
}


//slider
let i = 0;
nextBtn.addEventListener('click', () => {
  slides[i].style.display = "none";
  i = i+1;
  if(i >= slides.length){
   i = 0;
  }
  slides[i].style.display = "inline-block";
})

prevBtn.addEventListener('click', () => {
  slides[i].style.display= "none";
  i = i-1;
  if(i < 0) {
    i = slides.length - 1;
  }
  slides[i].style.display="inline-block";
})

//minislider
miniNextBtn.addEventListener('click', () => {
  miniSlides[i].style.display = "none";
  i = i+1;
  if(i >= miniSlides.length){
   i = 0;
  }
  miniSlides[i].style.display = "inline-block";
})

miniPrevBtn.addEventListener('click', () => {
  miniSlides[i].style.display= "none";
  i = i-1;
  if(i < 0) {
    i = miniSlides.length - 1;
  }
  miniSlides[i].style.display="inline-block";
})