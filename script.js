let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector("#main-title").innerText = "Fast & Furious";
  // Part 2
document.body.style.backgroundColor = "White";
  // Part 3
  document.querySelectorAll('#favorite-things li')[5].remove();
  // Part 4
document.querySelectorAll('.special-title li').fontSize ='2rem';
  // Part 5
  document.querySelector('#past-races').querySelectorAll('li')[3].remove();
  // Part 6
const city = document.getElementById('past-races');

let newListItem = document.createElement('li');

newListItem.innerText = 'Nashville';

  newListItem.appendChild();

  // newListItem.appendChild();
  // Part 7
      
  
  // I'm lost. I have no idea where to begin. Classmates tried to help me, with no success.
}
