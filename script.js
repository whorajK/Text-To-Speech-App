// VARIABLES
const textEl = document.querySelector("#text");
const btn = document.querySelector("#btn");

// LISTENS TO THE BTN
btn.addEventListener("click", () => {
  getConverted();
});

// GENERATES SPEECH
let getConverted = () => {
  if ("speechSynthesis" in window) {
    const msg = new SpeechSynthesisUtterance();

    msg.text = textEl.value;
    window.speechSynthesis.speak(msg);
  } else {
    alert("Sorry, Your Browser Doesn't supports text to speech");
  }
};
