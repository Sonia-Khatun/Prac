const leftSide = document.querySelector(".left-side");
const toggleBtn = document.getElementById("toggleBtn");

const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");

toggleBtn.addEventListener("click", () => {
  leftSide.classList.toggle("active");

  const isOpen = leftSide.classList.contains("active");

  hamburgerIcon.style.display = isOpen ? "none" : "inline-block";
  closeIcon.style.display  = isOpen ? "inline-block" : "none";
});



document.getElementById("dark-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


const brightTheme = document.getElementById("sun");
const darkTheme = document.getElementById("moon");

brightTheme.addEventListener("click", () => {
  document.body.classList.add("Dark");
})

darkTheme.addEventListener("click", () => {
  document.body.classList.add("Light");
})


document.getElementById("hamburgerBtn").addEventListener("click", () => {
  document.querySelector(".left-side").classList.toggle("active");
});
