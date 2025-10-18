import { VALID_MSG } from "./constants.js";

// 입력받은 문자열이 빈 문자열인지 검사
function isEmptyInput(input) {
  return input == VALID_MSG.EMPTY_INPUT;
}
// "//"와 "\n" 사이의 커스텀 구분자가 존재하는지 검사
function validCustomSeparatorFormat(separateIndex) {
  if (separateIndex === VALID_MSG.NOT_FOUND_SUFFIX)
    throw new Error(VALID_MSG.INVALID_CUSTOM_SEPARATOR_FORMAT);
}
// 커스텀 구분자가 문자인지 아닌지 검사
function validCustomSeparatorType(customSeparator) {
  if (/\d/.test(customSeparator))
    throw new Error(VALID_MSG.INVALID_CUSTOM_SEPARATOR_TYPE);
}
// "," ":"  커스텀 구분자 이외에 다른 문자가 있는지 검사
function checkComposedWithNumber(parsedNumberArray) {
  if (parsedNumberArray.some(val => isNaN(Number(val))))
    throw new Error(VALID_MSG.INVALID_NUMBER_FORMAT);
}
// 배열에 음수가 포함되있는지 검사 
function checkNegativeNumber(parsedNumberArray) {
  if (parsedNumberArray.some(val => val < 0))
    throw new Error(VALID_MSG.INVALID_NEGATIVE_NUMBER);
}

export { isEmptyInput, validCustomSeparatorFormat, validCustomSeparatorType, checkComposedWithNumber, checkNegativeNumber }