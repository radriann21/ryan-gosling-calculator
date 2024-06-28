const $ = (selector) => document.querySelector(selector); // helper

const form = $('#form');
const figure = $('#image');
const overlay = $('#overlay');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const audio = new Audio('./drive.mp3');

  const firstNumber = $('#firstnumber').value;
  const secondNumber = $('#secondnumber').value;

  if (firstNumber && secondNumber !== null) {
    overlay.classList.add('show-overlay');
    figure.classList.add('show-figure');
    audio.play();
  }

})