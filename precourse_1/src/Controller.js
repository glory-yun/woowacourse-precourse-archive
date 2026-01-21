import { enterInput, printResult } from "./Views.js";
import Calculator from "./Calculator.js";

class Controller {
  // Calculator 인스턴스 생성
  constructor() {
    this.calculator = new Calculator();
  }

  /*
  - Controller 실행
  - 입력 -> 계산 -> 출력 
  - Error는 Calculator.js에서 문자열을 검사하면서, Validate.js를 통하여 throw됨.
  */
  async start() {
    // 사용자에게 문자열 입력받기
    const input = await enterInput();
    // 문자열 계산기에서 계산(숫자 덧셈) 수행
    const result = this.calculator.calculate(input)
    // 사용자에게 결과를 출력
    printResult(result);
  }
}

export default Controller;