// 입력받은 문자열이 빈 문자열인지 검사
function isEmptyInput(input) {
  return input == "";
}
// "//"와 "\n" 사이의 커스텀 구분자가 존재하는지 검사
function validCustomSeparatorFormat(separateIndex) {
  if (separateIndex === -1)
    throw new Error("[ERROR] 커스텀 구분자를 지정할 수 없습니다.");
}
// 커스텀 구분자가 문자인지 아닌지 검사
function validCustomSeparatorType(customSeparator) {
  if (/\d/.test(customSeparator))
    throw new Error("[ERROR] 커스텀 구분자는 문자로 이루어져 있습니다.");
}
// "," ":"  커스텀 구분자 이외에 다른 문자가 있는지 검사
function checkComposedWithNumber(parsedNumberArray) {
  if (parsedNumberArray.some(val => isNaN(Number(val))))
    throw new Error("[ERROR] 숫자가 아닌 값으로 이루어져 있습니다.");
}
// 배열에 음수가 포함되있는지 검사 
function checkNegativeNumber(parsedNumberArray) {
  if (parsedNumberArray.some(val => val < 0))
    throw new Error("[ERROR] 양수가 입력되어야 합니다.");
}

export { isEmptyInput, validCustomSeparatorFormat, validCustomSeparatorType, checkComposedWithNumber, checkNegativeNumber }