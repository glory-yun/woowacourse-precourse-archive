import { isEmptyInput, validCustomSeparatorFormat, validCustomSeparatorType } from "./utils/Validate.js";
class Calculator {
  //계산기 계산 실행 함수
  calculate(input) {
    //빈 문자열인지 검사
    if (isEmptyInput(input)) return 0;
    const separator = this.#findCustomSeparator(input);
    const parsedNumberArray = this.#parse(input, separator);
    return this.#add(parsedNumberArray);
  }

  // 커스텀 구분자 찾기
  #findCustomSeparator(input) {
    const defaultSeparator = /,|:/;

    if (!input.startsWith("//")) return defaultSeparator;

    // "\n" 이 존재하는지 확인
    validCustomSeparatorFormat(input);
    const customSeparator = input.slice(2, input.lastIndexOf("\\n"));
    // 커스텀 구분자가 문자인지 검사
    validCustomSeparatorType(customSeparator);

    return new RegExp(`,|:|${customSeparator}`);
  }

  // 구분자를 기준으로 문자열 분리
  #parse(input, separator) {
  }
  // 배열의 합 계산
  #add(parsedNumberArray) {

  }
}

export default Calculator;