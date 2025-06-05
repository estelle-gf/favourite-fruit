const canvas = document.getElementById('custom_canvas');
const jsConfetti = new JSConfetti({ canvas });

function addConfetti() {
  const fruit = document.getElementById("fruit").value;
  const fruitEmojis = {
      greenApple: ['🍏','💚'],
      redApple: ['🍎','♥️'],
      banana: ['🍌','✨'],
      cherry: ['🍒','❤️'],
      grapes: ['🍇','💜'],
      watermelon: ['🍉','💧'],
      lemon: ['🍋','💛'],
      lime: ['🍋‍🟩','🟢'],
      honeydew: ['🍈','🍯'],
      mango: ['🥭','🌴'],
      blueberry: ['🫐','💙'],
      orange: ['🍊','🟠'],
      peach: ['🍑','🧡'],
      strawberry: ['🍓','🫙'],
      kiwi: ['🥝','🟢'],
      pear: ['🍐','🌱'],
      tomato: ['🍅','🥫'],
      pineapple: ['🍍','🍹'],
    };
const emojis = fruitEmojis[fruit] || [' '];
    jsConfetti.addConfetti({
      emojis: emojis
    }); }
let fruitSelect = document.querySelector("#fruit");
fruitSelect.addEventListener("change", addConfetti);