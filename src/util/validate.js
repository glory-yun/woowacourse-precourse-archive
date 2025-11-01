export function validateInputIsEmpty(input) {
  if (input === '') {
    throw new Error('[ERROR] 빈 문자열을 입력 했습니다.\n')
  }
}

export function validateIsInteger(input) {
  if (!Number.isInteger(Number(input))) {
    throw new Error('[ERROR] 정수를 입력해야 합니다.\n')
  }
}

export function validateNumbersLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.\n");
  }
}
export function validateNumbersDuplicate(numbers) {
  const numbersSet = new Set(numbers);
  if (numbersSet.size !== 6) {
    throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.\n");
  }
}

export function validateRange(input) {
  if (input < 1 || 45 < input) {
    throw new Error("[ERROR] 로또 번호는 1~45 사이어야 합니다.\n");
  }
}

export function validateIsIncludeNumber(numbers, input) {
  if (numbers.includes(input)) {
    throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.\n");
  }
}

export function validateDivideThousand(input) {
  if (Number(input) % 1000) {
    throw new Error("[ERROR] 입력 금액은 1000원 나누어 떨어져야합니다.\n");
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
}