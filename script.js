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

const closeSidebar = document.getElementById("closeSidebarBtn");


closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
}); 

const sidebar = document.querySelector(".left-side");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");


// OPEN SIDEBAR
hamburgerBtn.addEventListener("click", () => {
  sidebar.hidden = false;
  hamburgerBtn.style.display = "none";   // hide nav close icon
});

// CLOSE SIDEBAR (inside sidebar)
closeSidebarBtn.addEventListener("click", () => {
  sidebar.hidden = true;
  hamburgerBtn.style.display = "block"; // show nav hamburger again
});