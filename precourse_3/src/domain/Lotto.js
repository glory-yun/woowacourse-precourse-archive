import {
  validateNumbers
} from "../util/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    validateNumbers(numbers)
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
