class Calculator {
  //계산기 계산 실행 함수
  calculate(input) {
    const separator = this.#findCustomSeperator(input);
    const parsedNumberArray = this.#parse(input, separator);
    return this.#add(parsedNumberArray);
  }

  // 커스텀 구분자 찾기
  #findCustomSeperator(input) {
  }

  // 구분자를 기준으로 문자열 분리
  #parse(input, separator) {
  }
  // 배열의 합 계산
  #add(parsedNumberArray) {
  }
}

export default Calculator;