import { Console } from '@woowacourse/mission-utils';

// 사용자에게 입력 받기
async function enterInput() {
  const input = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
  return input;
}

// 사용자에게 결과 출력하기
function printResult(result) {
  Console.print(`결과 : ${result}`);
}

export { enterInput, printResult }