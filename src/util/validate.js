import { ERROR_MESSAGES } from '../util/constants/errorConstants.js';
import {
  LOTTO_NUMBER_COUNT,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_PRICE,
  EMPTY_INPUT,
  NO_PURCHASE
} from '../util/constants/valuesConstants.js';

export function validateInputIsEmpty(input) {
  if (input === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
}

export function validateIsPositive(input) {
  if (Number(input) < 0) {
    throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
  }
}

export function validateIsInteger(input) {
  if (!Number.isInteger(Number(input))) {
    throw new Error(ERROR_MESSAGES.NOT_INTEGER);
  }
}

export function validateNumbersLength(numbers) {
  if (numbers.length !== LOTTO_NUMBER_COUNT) {
    throw new Error(ERROR_MESSAGES.NUMBERS_LENGTH);
  }
}

export function validateNumbersDuplicate(numbers) {
  const numbersSet = new Set(numbers);
  if (numbersSet.size !== LOTTO_NUMBER_COUNT) {
    throw new Error(ERROR_MESSAGES.NUMBERS_DUPLICATE);
  }
}

export function validateRange(input) {
  if (input < MIN_LOTTO_NUMBER || MAX_LOTTO_NUMBER < input) {
    throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
  }
}

export function validateIsIncludeNumber(numbers, input) {
  if (numbers.includes(input)) {
    throw new Error(ERROR_MESSAGES.BONUS_DUPLICATE);
  }
}

export function validateDivideThousand(input) {
  if (Number(input) % LOTTO_PRICE) {
    throw new Error(ERROR_MESSAGES.NOT_DIVIDE_THOUSAND);
  }
}

export function validateNumbers(numbers) {
  validateNumbersLength(numbers);
  validateNumbersDuplicate(numbers);
  numbers.forEach(number => {
    validateIsInteger(number);
    validateRange(number);
  })
}

export function validateLottoWinningNumbers(winningNumbers, bonusNumber) {
  validateNumbers(winningNumbers);
  validateIsIncludeNumber(winningNumbers, bonusNumber);
  validateIsInteger(bonusNumber);
  validateRange(bonusNumber);
}

export function validatePurchaseAmount(input) {
  validateInputIsEmpty(input);
  validateIsInteger(input);
  validateDivideThousand(input);
  validateIsPositive(input);
}