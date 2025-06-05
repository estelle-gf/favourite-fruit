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

function displayFacts(response) {new Typewriter("#fun-facts", {
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
    let fruit = document.querySelector("#fruit").value; 
showContainer();
let funFactsElement = document.querySelector("#fun-facts");
funFactsElement.innerHTML = `<div class="generating"> ⏳ Getting your fun fact about ${fruit}... </div>`;
let growingTipsElement = document.querySelector("#growing-tips");
growingTipsElement.innerHTML = `<div class="generating"> ⏳ Getting your growing advice for ${fruit}... </div>`;

let apiKey = "2a99380b94355b9foa25076te09bd049";
let context = "You are an expert in horticulture, you are passionate about giving advice. Please always follow the User instructions and sign off with -Shecodes AI in the same font size as the text.";
let prompt = `User instructions: Generate a fruity fun fact about ${fruit}. 
Write on separate lines, format in basic HTML  but with no code tags. 
Be polite, keep the response short. No more than 2 lines for the fun fact and 3 for the growing advice.`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl)
  .then(response => {
    displayFacts(response);
    return response;
  })
  .then(response => {
    displayTips(response);
  })
  .catch(error => {
    console.error("API request failed:", error);
    document.querySelector("#fun-facts").innerHTML = "❌ Could not load fun fact.";
    document.querySelector("#growing-tips").innerHTML = "Please try again.";
  }); }

let fruitSelect = document.querySelector("#fruit");
fruitSelect.addEventListener("change", addConfetti);

let lengthenMainElement = document.querySelector("#button");
lengthenMainElement.addEventListener("click", showMore);
lengthenMainElement.addEventListener("click", generateFactsAndTips);
