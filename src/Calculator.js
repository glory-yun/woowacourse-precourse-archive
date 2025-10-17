import { isEmptyInput, validCustomSeparatorFormat, validCustomSeparatorType, checkComposedWithNumber, checkNegativeNumber } from "./utils/Validate.js";
class Calculator {
  //계산기 계산 실행 함수
  calculate(input) {
    //빈 문자열인지 검사
    if (isEmptyInput(input)) return 0;
    const [separator, separateIndex] = this.#findCustomSeparator(input);
    const parsedNumberArray = this.#parse(input, separator, separateIndex);
    return this.#add(parsedNumberArray);
  }

  // 커스텀 구분자 찾기
  #findCustomSeparator(input) {
    const defaultSeparator = `\,|\:`;

    if (input.startsWith("//")) {
      // "\n" 이 존재하는지 확인
      const separateIndex = input.lastIndexOf("\\n");
      validCustomSeparatorFormat(separateIndex);
      const customSeparator = input.slice(2, separateIndex);
      // 커스텀 구분자가 문자인지 검사
      validCustomSeparatorType(customSeparator);
      return [RegExp(`${defaultSeparator}|\\${customSeparator}`), separateIndex];
    }
    return [RegExp(defaultSeparator), 0];
  }

  // 구분자를 기준으로 문자열 분리
  #parse(input, separator, separateIndex) {
    //커스텀 구분자가 있을 때 separateIndex > 0 이므로 +2 하기
    if (separateIndex) separateIndex += 2;
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