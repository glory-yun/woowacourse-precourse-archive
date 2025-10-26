import { enterInput } from "../view/InputView.js";
import {
  printCurrentRaceResult,
  printLineSpacing,
  printFinalRacingWinner
} from "../view/OutputView.js";
import { PLAY_RESULT } from "../constants/RacingControllerConstants.js";
import { parseCarName } from "../util/parser.js"
import Car from '../model/Car.js';
import RacingGame from '../model/RacingGame.js';

class RacingController {
  async start() {

    const [carInput, racingCount] = await enterInput();

    //문자열 분리
    const carNameList = parseCarName(carInput);

    //Car 객체 배열 및 Racing 객체 생성
    const cars = carNameList.map(car => new Car(car));
    const racingGame = new RacingGame(cars);

    //racingCount만큼 자동차들을 race 후 그 결과 출력하기
    printLineSpacing(PLAY_RESULT);
    const allRacingResult = racingGame.play(racingCount);
    allRacingResult.forEach(result => printCurrentRaceResult(result));

    //최종 우승자 찾기
    const winnersName = racingGame.getWinners();

    // 최종 우승자 출력
    printFinalRacingWinner(winnersName);
  }
}

export default RacingController;