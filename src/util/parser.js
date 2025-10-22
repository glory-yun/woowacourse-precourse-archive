import { validateCarName, validateListIsEmpty } from '../util/validate.js'

export function parseCarName(carInput) {
  //"," 로 구분, 양 옆 공백 제거, 빈 문자열 제거, 
  const carNameList = carInput
    .split(',')
    .map(carName => carName.trim())
    .filter(carName => carName.length > 0);

  //자동차가 있는지 검사
  validateListIsEmpty(carNameList);
  //자동차 이름이 5자 이상인지 검사
  validateCarName(carNameList);

  return carNameList
}