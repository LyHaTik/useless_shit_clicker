let clickCount = 0;
const messages = [
  "Why are you still clicking?",
  "Seriously, there's no point to this!",
  "Wow, you really like clicking, huh?",
  "Congratulations! You've achieved... nothing!",
  "Stop clicking, please. Or don't, I guess...",
  "This is the most useless thing you'll do today."
];

const button = document.getElementById('uselessButton');
const counter = document.getElementById('clickCounter');
const message = document.getElementById('uselessMessage');

button.addEventListener('click', () => {
  clickCount++;
  counter.textContent = `Clicks: ${clickCount}`;

  // Show a random message every 5 clicks
  if (clickCount % 5 === 0) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      message.textContent = randomMessage;
  }

  // Randomize button position every 10 clicks
  if (clickCount % 10 === 0) {
    const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
      const randomY = Math.random() * (window.innerHeight - button.offsetHeight);
      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
      }
  });
