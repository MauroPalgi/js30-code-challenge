window.addEventListener("keydown", playSound);

function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  
    if (!audio) return;
  
    // AUDIO
    audio.currentTime = 0; // regresa al comienzo
    audio.play(); // regresa al comienzoa
  
    // STYLE
    key.classList.add("playing");
}

// REMOVE TRANSITION
const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(this);
  this.classList.remove("playing");
}

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
