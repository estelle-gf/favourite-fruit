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
    function showContainer(event) {
        let containerElement = document.querySelector("#float-container");
        containerElement.classList.remove("hidden");
    }
    function showMore(event) {
        let mainElement = document.querySelector("#main");
        mainElement.classList.add("mainClick"); 
   }

function displayFacts(response) {new Typewriter("#fun-fact", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});  
 setTimeout(() => displayTips(response), 2000);
}
function displayTips(response) {

    new Typewriter("#growing-tips", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});  
}
function generateFactsAndTips(event) {
    event.preventDefault();
    let fruit = document.querySelector("#fruit");
let fruitName = fruit.options[fruit.selectedIndex].text;
showContainer();
let funFactsElement = document.querySelector("#fun-fact");
funFactsElement.innerHTML = `<div class="generating"> ⏳ Getting your fun fact about ${fruitName}... </div>`;
let growingTipsElement = document.querySelector("#growing-tips");
growingTipsElement.innerHTML = `<div class="generating"> ⏳ Getting your growing advice for ${fruitName}... </div>`;

let apiKey = "2a99380b94355b9foa25076te09bd049";
let context = "You are an expert in horticulture, you are passionate about giving advice. Keep it short. Please always follow the User instructions and sign off with -Shecodes AI, on a separate line, in the same font size as the text. Write on separate lines, with 0.5 cm spacing and format in basic HTML  but with no code tags. ";
let promptOneFact = `User instructions: Generate a short hilarious funny fact about ${fruitName}.For example knock knock jokes or a pun. No More that 4 lines of text`
let promptTwoTip = `User instructions: Generate some advice to grow ${fruitName} successfully. e.g how much water, light, what type of soild or climate works best Keep it short, no More that 4 lines of text`

let apiUrlOne = `https://api.shecodes.io/ai/v1/generate?prompt=${promptOneFact}&context=${context}&key=${apiKey}`;
let apiUrlTwo = `https://api.shecodes.io/ai/v1/generate?prompt=${promptTwoTip}&context=${context}&key=${apiKey}`;


axios.get(apiUrlOne)
  .then(response => {
    displayFacts(response); 
    return axios.get(apiUrlTwo); 
  })
  .then(response => {
    displayTips(response); 
  })
  .catch(error => {
    console.error("API request failed:", error);
    document.querySelector("#fun-fact").innerHTML = "❌ Could not load fun fact.";
    document.querySelector("#growing-tips").innerHTML = "Please try again.";
  }); }

let fruitSelect = document.querySelector("#fruit");
fruitSelect.addEventListener("change", addConfetti);

let lengthenMainElement = document.querySelector("#button");
lengthenMainElement.addEventListener("click", showMore);
lengthenMainElement.addEventListener("click", generateFactsAndTips);
