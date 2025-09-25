// Räknare
let foundCount = 0;
let time = 0;
let timer;

// Hämta HUD-element
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

// Hämta content-element
const treasureClassEl = document.querySelectorAll('.treasure');
const treasure1 = document.getElementById("treasure1");

// Starta timern
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

console.log(treasureClassEl);
treasureClassEl.forEach(El => {
    El.addEventListener("click", () => {
        console.log("sjatt");
        El.style.color = "red";
        foundCount++;
        foundCountEl.textContent = foundCount;

    alert("Grattis! Du hittade en skatt!");
        if (foundCount === 10) {
         clearInterval(timer);
         alert("Alla skatter hittade på " + time + " sekunder!");
        }
    });
});

