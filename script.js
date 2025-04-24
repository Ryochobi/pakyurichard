let mode = 'tomato'; // default mode

const target = document.getElementById('target');
const tomatoBtn = document.getElementById('tomatoMode');
const textBtn = document.getElementById('textMode');
const message = document.getElementById('message');
const container = document.getElementById('container');

const splatSound = new Audio('splat.wav'); // add your splat sound here

tomatoBtn.addEventListener('click', () => {
  mode = 'tomato';
  tomatoBtn.classList.add('active');
  textBtn.classList.remove('active');
});

textBtn.addEventListener('click', () => {
  mode = 'text';
  textBtn.classList.add('active');
  tomatoBtn.classList.remove('active');
});

target.addEventListener('click', (e) => {
  if (mode === 'tomato') {
    throwTomato(e);
  } else {
    showText();
  }
});

function throwTomato(e) {
  const tomato = document.createElement('img');
  tomato.src = 'tomato.png';
  tomato.className = 'tomato';

  const rect = target.getBoundingClientRect();
  tomato.style.left = `${Math.random() * rect.width}px`;
  tomato.style.top = `-50px`;
  container.appendChild(tomato);

  setTimeout(() => {
    tomato.style.transform = `translateY(${rect.height}px)`;
    tomato.style.opacity = 0;
    splatSound.currentTime = 0;
    splatSound.play();
  }, 10);

  setTimeout(() => tomato.remove(), 1000);
}

const insults = [
  "Fuck you Richard",
  "You're only winning because of vote botting",
  "Evil white baby",
  "We hate you Richard",
  "Evil white freak",
  "Go back to your mom",
  "We want you removed from the game",
  "They should nerf you to hell and back",
  "We want you dead",
  "You don't deserve a deduction star skin"
];


// Replace your current showText function with this:
function showText() {
  const randomIndex = Math.floor(Math.random() * insults.length);
  const phrase = insults[randomIndex];

  const textElement = document.createElement('div');
  textElement.textContent = phrase;
  textElement.className = 'insult-message';

  // Randomize position within the container
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const x = Math.random() * (containerWidth - 150); // prevent overflow
  const y = Math.random() * (containerHeight - 50);

  textElement.style.left = `${x}px`;
  textElement.style.top = `${y}px`;

  container.appendChild(textElement);

  // Remove after a few seconds
  setTimeout(() => {
    textElement.style.opacity = 0;
    setTimeout(() => textElement.remove(), 1000); // fade-out + remove
  }, 4000); // display for 4s
}
