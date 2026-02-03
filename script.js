const btnNo3 = document.querySelector("#move-random");
let lastFlyAwayTime = 0;

function flyAway(elm) {
  const now = Date.now();
  // Throttle: only allow flyAway every 100ms to prevent performance issues
  if (now - lastFlyAwayTime < 100) return;
  lastFlyAwayTime = now;

  // Add blur class for "motion" feel
  elm.classList.add("moving");
  
  // Random coordinates (10% to 90% to keep it on screen)
  const top = Math.floor(Math.random() * 80 + 10);
  const left = Math.floor(Math.random() * 80 + 10);

  elm.style.top = `${top}%`;
  elm.style.left = `${left}%`;

  // Remove blur after movement finishes
  setTimeout(() => elm.classList.remove("moving"), 150);

}

// HOVER: Button dashes away when you hover (desktop)
btnNo3.addEventListener("mouseenter", function (e) {
  btnNo3.classList.add("abs");
  flyAway(e.target);
});

// TOUCH: Button dashes away on touch (mobile)
btnNo3.addEventListener("touchstart", function (e) {
  e.preventDefault();
  btnNo3.classList.add("abs");
  flyAway(e.target);
});

// A helper function to hide everything first
// function showPage(className) {
//   const pages = [".index", ".no1", ".no2", ".no3", ".yespage"];
  
//   // Hide every page in the array
//   pages.forEach(page => {
//     document.querySelector(page).style.display = "none";
//   });

//   // Show only the requested page
//   document.querySelector(className).style.display = "block";
// }

function showPage(className) {
  const pages = [".index", ".no1", ".no2", ".no3", ".yespage"];
  
  pages.forEach(page => {
    const el = document.querySelector(page);
    el.classList.remove("active");
    el.style.display = "none"; // Hide completely
  });

  const target = document.querySelector(className);
  
  // 1. Bring it back into the document flow
  target.style.display = "block"; 
  
  // 2. A tiny delay (10ms) allows the 'display: block' to register
  // so the CSS transition actually plays
  setTimeout(() => {
    target.classList.add("active");
  }, 10);
}

// Now your listeners are super clean:
document.querySelectorAll(".yes").forEach(btn => {
  btn.addEventListener("click", () => showPage(".yespage"));
});
document.querySelector("#no1").addEventListener("click", () => showPage(".no1"));
document.querySelector("#no2").addEventListener("click", () => showPage(".no2"));
document.querySelector("#no3").addEventListener("click", () => showPage(".no3"));