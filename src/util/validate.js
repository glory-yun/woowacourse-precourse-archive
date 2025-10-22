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