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
