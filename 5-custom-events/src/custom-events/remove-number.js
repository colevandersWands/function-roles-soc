/**
 * Returns a new `removeNumber` event containing the number to remove.
 *
 * @param {number} newNumber - The number to remove.
 * @returns {CustomEvent#removeNumber} - An `removeNumber` event with your number.
 */
export const removeNumberEvent = (toRemove = 0) => {
  return new CustomEvent('removeNumber', {
    bubbles: true,
    detail: { number: toRemove },
  });
};
