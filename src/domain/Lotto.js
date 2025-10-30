import {
  validateIsInteger,
  validateNumbersLength,
  validateNumbersDuplicate,
  validateRange
} from "../util/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateNumbersLength(numbers);
    validateNumbersDuplicate(numbers);
    numbers.forEach(number => {
      validateIsInteger(number);
      validateRange(number);
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
