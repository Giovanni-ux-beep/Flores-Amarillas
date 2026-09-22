const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const openButton = document.getElementById("openLetter");
const backTop = document.getElementById("backTop");

openButton.addEventListener("click", () => {
  opening.classList.add("opened");
  setTimeout(() => {
    letter.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 180);
});

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > window.innerHeight * 0.7);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Pequeños pétalos flotando por la pantalla.
const petals = document.querySelector(".petals");
const symbols = ["♡", "✦", "✿", "•"];

for (let i = 0; i < 24; i++) {
  const petal = document.createElement("span");
  petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  petal.style.left = Math.random() * 100 + "%";
  petal.style.top = Math.random() * 100 + "%";
  petal.style.animationDelay = (Math.random() * 6) + "s";
  petal.style.animationDuration = (5 + Math.random() * 7) + "s";
  petals.appendChild(petal);
}
