function createConfetti() {
  jsConfetti.addConfetti({
    emojis: [fruitSelect.value],
    confettiNumber: 100,
    emojiSize: 50
  });
}


let fruitSelect = document.querySelector("#fruit");
fruitSelect.addEventListener("change", createConfetti);
