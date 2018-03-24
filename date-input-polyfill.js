import './date-input-polyfill.scss';
const Input = require(`./input.js`);

const supportsDateInput = () => {
  const input = document.createElement(`input`);
  input.setAttribute(`type`, `date`);

  const notADateValue = `not-a-date`;
  input.setAttribute(`value`, notADateValue);

  return input.value !== notADateValue;
};

const addPickers = () => {
  const dateInputs = document.querySelectorAll(
    `input[type="text"].date-polyfill:not([data-has-picker])`);
  for(let i = 0; i < dateInputs.length; ++i) {
    new Input(dateInputs[i]);
  }

  if(!supportsDateInput()) {
    const dateInputs = document.querySelectorAll(`input[type="date"]:not([data-has-picker])`);
    for(let i = 0; i < dateInputs.length; ++i) {
      new Input(dateInputs[i]);
    }
  }
};

// Run the above code on any <input type="date"> in the document, also on dynamically created ones.
addPickers();

document.addEventListener(`DOMContentLoaded`, () => {
  addPickers();
});

// This is also on mousedown event so it will capture new inputs that might
// be added to the DOM dynamically.
document.querySelector(`body`).addEventListener(`mousedown`, () => {
  addPickers();
});
