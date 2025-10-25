export function validateEmptyInput(carInput, racingCount) {
  if (carInput === '' || racingCount === '') {
    throw new Error("[ERROR] 자동차 이름과 시도할 횟수를 모두 입력해야 합니다.")
  }
}
export function validateRacingCountIsNaN(racingCount) {
  if (isNaN(racingCount) || racingCount.trim() === '') {
    throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.")
  }
}
export function validateNegativeNumber(racingCount) {
  if (racingCount < 0) {
    throw new Error("[ERROR] 시도 횟수는 음수일 수 없습니다.")
  }
}
export function validateCarName(carNameList) {
  if (carNameList.some(carName => carName.length > 5)) {
    throw new Error("[ERROR] 자동차 이름은 5글자 이하여야 합니다.")
  }
}
export function validateListIsEmpty(carNameList) {
  if (!carNameList.length) {
    throw new Error("[ERROR] 자동차는 1개 이상 입력해야 합니다.")
  }
}