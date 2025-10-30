export function validateInputIsEmpty(input) {
  if (input === '') {
    throw new Error('[ERROR] 빈 문자열을 입력 했습니다.')
  }
}

export function validateIsInteger(input) {
  if (!Number.isInteger(Number(input))) {
    throw new Error('[ERROR] 정수를 입력해야 합니다.')
  }
}

export function validateNumbersLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
}
export function validateNumbersDuplicate(numbers) {
  const numbersSet = new Set(numbers);
  if (numbersSet.size !== 6) {
    throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
  }
}

export function validateRange(input) {
  if (input < 1 || 45 < input) {
    throw new Error("[ERROR] 로또 번호는 1~45 사이어야 합니다.");
  }
}

