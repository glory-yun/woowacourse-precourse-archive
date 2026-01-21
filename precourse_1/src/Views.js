import { Console } from '@woowacourse/mission-utils';
import { VIEWS_MSG } from './utils/constants.js'

// 사용자에게 입력 받기
async function enterInput() {
  const input = await Console.readLineAsync(`${VIEWS_MSG.READ_INPUT}\n`);
  return input;
}
// 사용자에게 결과 출력하기
function printResult(result) {
  Console.print(`${VIEWS_MSG.PRINT_RESULT} ${result}`);
}

export { enterInput, printResult }