export function validateCarName(carNameList) {
  if (carNameList.some(carName => carName.length > 5)) {
    throw new Error("[ERROR] 자동차 이름은 5글자 이하여야 합니다.")
  }
}