import { isEmptyInput, validCustomSeparatorFormat, validCustomSeparatorType, checkComposedWithNumber, checkNegativeNumber } from "./utils/Validate.js";
import { CALC_MSG } from './utils/constants.js';

class Calculator {
  //계산기 계산 실행 함수
  calculate(input) {
    //빈 문자열인지 검사
    if (isEmptyInput(input)) return CALC_MSG.EMPTY_INPUT_RESULT;
    const [separator, separateIndex] = this.#findCustomSeparator(input);
    const parsedNumberArray = this.#parse(input, separator, separateIndex);
    return this.#add(parsedNumberArray);
  }

  // 커스텀 구분자 찾기
  #findCustomSeparator(input) {
    if (!input.startsWith(CALC_MSG.CUSTOM_SEPARATOR_PREFIX))
      return [RegExp(CALC_MSG.DEFAULT_SEPARATOR), CALC_MSG.CUSTOM_SEPARATOR_DEFAULT_INDEX];

    const separateIndex = input.lastIndexOf(CALC_MSG.CUSTOM_SEPARATOR_SUFFIX);
    const customSeparator = input.slice(CALC_MSG.PREFIX_LENGTH, separateIndex);

    // "//"와 "\n" 사이의 커스텀 구분자가 존재하는지 검사
    validCustomSeparatorFormat(separateIndex);

    if (customSeparator == CALC_MSG.EMPTY_CUSTOM_SEPARATOR)
      return [RegExp(CALC_MSG.DEFAULT_SEPARATOR), CALC_MSG.CUSTOM_SEPARATOR_EMPTY_INDEX];
    // 커스텀 구분자가 문자인지 검사
    validCustomSeparatorType(customSeparator);
    return [RegExp(`${CALC_MSG.DEFAULT_SEPARATOR}|\\${customSeparator}`), separateIndex];
  }

  // 구분자를 기준으로 문자열 분리
  #parse(input, separator, separateIndex) {
    //커스텀 구분자가 있을 때 separateIndex > 0 이므로 +2 하기
    if (separateIndex) separateIndex += CALC_MSG.SUFFIX_LENGTH;
    const splitString = input.slice(separateIndex);
    return splitString.split(separator);
  }
  // 배열의 합 계산
  #add(parsedNumberArray) {
    checkComposedWithNumber(parsedNumberArray);
    checkNegativeNumber(parsedNumberArray);
    return parsedNumberArray.reduce((sum, val) => sum + Number(val), 0);
  }
}

export default Calculator;