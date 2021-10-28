import { removeNumberEvent } from './remove-number.js';

describe('removeNumberEvent: returns a custom event containing a new number', () => {
  describe('remove the number 5', () => {
    const event = removeNumberEvent(5);
    it('is an event', () => {
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "removeNumber"', () => {
      expect(event.type).toEqual('removeNumber');
    });
    it('bubbles', () => {
      expect(event.bubbles).toEqual(true);
    });
    it('details: number is 5', () => {
      expect(event.detail).toEqual({ number: 5 });
    });
  });
  describe('remove the number -5', () => {
    const event = removeNumberEvent(-5);
    it('is an event', () => {
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it('has type "removeNumber"', () => {
      expect(event.type).toEqual('removeNumber');
    });
    it('bubbles', () => {
      expect(event.bubbles).toEqual(true);
    });
    it('details: number is -5', () => {
      expect(event.detail).toEqual({ number: -5 });
    });
  });
});
