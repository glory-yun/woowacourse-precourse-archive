import {
  ERROR_EMPTY_INPUT,
  ERROR_NOT_A_NUMBER,
  ERROR_NEGATIVE_NUMBER,
  ERROR_NAME_LENGTH_OVER,
  ERROR_NO_CARS
} from "../constants/validateConstants.js"

export function validateEmptyInput(carInput, racingCount) {
  if (carInput === '' || racingCount === '') {
    throw new Error(ERROR_EMPTY_INPUT)
  }
}
export function validateRacingCountIsNaN(racingCount) {
  if (isNaN(racingCount) || racingCount.trim() === '') {
    throw new Error(ERROR_NOT_A_NUMBER)
  }
}
export function validateNegativeNumber(racingCount) {
  if (racingCount < 0) {
    throw new Error(ERROR_NEGATIVE_NUMBER)
  }
}
export function validateCarNamesLength(carNameList) {
  if (carNameList.some(carName => carName.length > 5)) {
    throw new Error(ERROR_NAME_LENGTH_OVER)
  }
}
export function validateListIsEmpty(carNameList) {
  if (!carNameList.length) {
    throw new Error(ERROR_NO_CARS)
  }
}