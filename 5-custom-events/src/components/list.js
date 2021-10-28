import { removeNumberEvent } from '../custom-events/remove-number.js';

/**
 * Returns a list element with all numbers from the array.
 *
 * @param {number[]} list - A list of numbers to render.
 * @returns {HTMLListElement} - The rendered list of numbers.
 * @fires CustomEvent#removeNumber
 */
export const listComponent = (list = []) => {
  const listEl = document.createElement('ul');
  listEl.className = 'no-dots';

  for (const item of list) {
    const liEl = document.createElement('li');
    liEl.innerHTML = item;
    liEl.addEventListener('click', (event) => {
      event.stopPropagation();
      // you do not need to cast the value to a number!
      //  it will be passed as a property in an object, not the innerHTML
      const newRemoveEvent = removeNumberEvent(item);
      liEl.dispatchEvent(newRemoveEvent);
    });

    listEl.appendChild(liEl);
  }

  return listEl;
};
