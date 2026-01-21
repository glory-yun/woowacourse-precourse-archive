# javascript-racingcar-precourse

# 🏎️ 자동차 경주

## 기능 요구사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 실행 흐름

1. 프로그램 시작 → 문자열, 실행 횟수(racingCount) 입력받기
2. 입력값 검증하기

   2-1. 빈 문자열인지 검사

   2-2. 실행 횟수가 음수가 아닌 정수인지 검사

3. 문자열에서 자동차의 이름 분리하기

   3-1. 분리된 문자열이 5자 초과인지 검사

   3-2 분리된 문자열이 없을 경우 검사

4. 분리된 문자열을 기반으로 Car 객체 배열 및 Racing 객체 생성
5. racingCount만큼 자동차들을 racing 후 그 결과 출력하기

   5-5. 난수의 결과가 정상인지 검사

6. racing이 끝난 뒤, 최종 우승자 출력하기

## 주요 기능 목록

- [x] **문자열 입력 받기**

  → `Console.readLineAsync()`를 사용하여 자동차 이름과, 이동 횟수를 입력받음.

  → 빈 문자열, 숫자, 음수 등을 검증함.

- [x] **자동차 이름 파싱 및 검증**

  → 쉼표(`,`)를 기준으로 문자열을 분리하고 공백을 제거하여 이름 배열을 생성함.

  → `trim` 을 사용하여 양 옆 공백 제거하기

  → 분리된 문자열이 공백일 경우, 없는 이름으로 처리하기

  → 이름의 길이가 5자를 초과할 경우 예외 처리함.

  → 이름 배열이 비어있을 경우 예외 처리함.

  → 빈 배열일 경우(자동차가 없는 경우) 예외 처리함

- [x] **Racing Game**

  → `Random.pickNumberInRange(0,9)` 으로 난수 생성

  → 주어진 횟수만큼 경주를 실행하고 전체 결과를 반환함.

  → 난수를 기반으로 전진 or 정지 하기

  → 난수가 4이상일 경우 전진

- [x] **Random Number 생성**

  → `Random.pickNumberInRange()`를 사용하여 난수 생성.

- [x] **현재 레이싱 결과 출력**

  → 자동차의 이름과 지금까지의 전진 횟수를 출력.

- [x] **우승자 출력하기**

  → 최종 우승자를 출력하며, 여러 명일 경우 쉼표(`,`)로 구분함.

- [x] 예외 처리

  → `try...catch`로 실행 중 발생하는 에러를 처리함.

- [x] 상수화

  → 매직 넘버, 문자열 등을 상수로 관리함.

## **🚨**예외 처리 사항

- 자동차 이름 또는 시도할 횟수 입력값이 비어있는 경우 ('')
- 자동차 이름 중 5자를 초과하는 이름이 있을 경우
- 입력된 자동차 이름이 하나도 없는 경우 (','만 입력)
- 시도할 횟수가 숫자가 아닌 경우 ('abc', ' ')
- 시도할 횟수가 음수인 경우

⇒ "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료.

## 📁 파일 구조 설계

```
├── __tests__
│   ├── ApplicationTest.js
│   ├── Car.test.js
│   ├── RacingGame.test.js
│   └── Validate.test.js
└── src
   ├── App.js
   ├── index.js
   ├── constants
   │   ├── CarConstants.js
   │   ├── InputViewConstants.js
   │   ├── OutputViewConstants.js
   │   ├── RacingControllerConstants.js
   │   ├── RacingGameConstants.js
   │   └── validateConstants.js
   ├── controller
   │   └── RacingController.js
   ├── model
   │   ├── Car.js
   │   └── RacingGame.js
   ├── util
   │   ├── parser.js
   │   ├── pickRandomNumber.js
   │   └── validate.js
   └── view
       ├── InputView.js
       └── OutputView.js
```

## 주요 파일 설명

### 📁 controller/RacingController.js

→ MVC 패턴의 컨트롤러. 프로그램의 전체 흐름을 제어.

- [메서드]
  - start: (입력 → 처리 → 출력)의 전체 흐름을 제어합니다.
  - InputView로부터 입력을 받아 RacingGame 모델에게 처리를 위임함
  - 그 결과를 다시 OutputView에 전달하여 출력.
  - try-catch를 통해 예외 상황을 다룸.

---

### 📁 model/Car.js

→ 자동차의 이름, 위치와 움직임을 담당.

- [메서드]
  - constructor: 자동차의 이름을 받아 초기 위치를 0으로 설정.
  - move: 자동차의 위치를 1만큼 증가시킵니다.
  - getName, getPosition: 자동차의 현재 이름과 위치를 반환

---

### 📁 model/RacingGame.js

→ 전체 경주 로직을 관리. 게임의 모든 규칙과 상태 변화를 책임집니다.

- [메서드]
  - play: racingCount만큼 전체 경주를 실행하고, 모든 라운드의 결과가 담긴 배열을 반환
  - getWinners: 경주가 끝난 후, 가장 멀리 간 자동차를 찾아 최종 우승자 이름 배열을 반환
  - #race: 생성된 난수를 토대로, 자동차를 움직일지 결정하는 메서드
  - #getRacingResult: 해당 라운드의 결과를 반환하는 메서드

---

### 📁 view/InputView.js ,view/OutputView.js

→ 사용자의 입출력을 담당

- [메서드]
  - enterInput (InputView): 사용자로부터 자동차 이름과 시도할 횟수를 입력받음
  - printCurrentRaceResult (OutputView): 각 라운드의 실행 결과를 형식에 맞게 출력
  - printFinalRacingWinner (OutputView): 최종 우승자를 형식에 맞게 출력
  - printError (OutputView): 에러 메시지를 출력

---

### 📁 util/validate.js

→ 사용자의 입력값이 요구사항에 맞는지 검증하는 로직을 책임집니다.

- [메서드]
  - validateEmptyInput: 자동차 이름이나 시도 횟수가 빈 값일 경우 예외 발생
  - validateRacingCountIsNaN: 시도 횟수가 숫자가 아닌 값일 경우 예외 발생
  - validateNegativeNumber: 시도 횟수가 음수일 경우 예외 발생
  - validateCarNamesLength: 자동차 이름 중 5자를 초과하는 이름이 있을 경우 예외 발생
  - validateListIsEmpty: 파싱 후 자동차 이름 배열이 비어있을 경우 예외 발생.

---

### 📁 util/parser.js

→ 입력받은 문자열을 쉼표를 기준으로 파싱

- [메서드]
  - parseCarName: (,)를 기준으로 문자열을 분리하고, 각 이름의 양 끝 공백을 제거하여 이름 배열을 반환

---

### 📁 util/pickRandomNumber.js

→ 난수 생성 로직을 분리하여 관리합니다.

- [메서드]
  - pickRandomNumber: MissionUtils.Random.pickNumberInRange(0, 9)를 호출하여 생성된 난수를 반환

---

### 📁 constants/\*.js

→ 코드에서 사용되는 매직 넘버, 문자열 등을 상수로 관리합니다.

---

## 테스트 결과

| **구분**                 | **입력값**                               | **예상 결과**                                               |
| ------------------------ | ---------------------------------------- | ----------------------------------------------------------- |
| **정상 작동**            |                                          |                                                             |
| 기본 입력                | 이름: `'pobi,woni,jun'` <br> 횟수: `'5'` | 5회 경주 정상 실행 및 우승자 출력                           |
| 이름 5자                 | 이름: `'12345'` <br> 횟수: `'3'`         | 정상 실행                                                   |
| 시도 횟수 0              | 이름: `'a,b'`<br> 횟수: `'0'`            | 경주 없이 바로 우승자 출력 (a, b)                           |
| **예외 처리**            |                                          |                                                             |
| 자동차 이름 5자 초과     | 이름: `'pobi,javajigi'`                  | `[ERROR] 자동차 이름은 5글자 이하여야 합니다.`              |
| 자동차 이름 미입력       | 이름: `''`                               | `[ERROR] 자동차 이름과 시도할 횟수를 모두 입력해야 합니다.` |
| 자동차가 없는 경우       | 이름: `','`                              | `[ERROR] 자동차는 1개 이상 입력해야 합니다.`                |
| 시도 횟수 미입력         | 횟수: `''`                               | `[ERROR] 자동차 이름과 시도할 횟수를 모두 입력해야 합니다.` |
| 시도 횟수 숫자가 아닌 값 | 횟수: `'abc'`                            | `[ERROR] 시도 횟수는 숫자여야 합니다.`                      |
| 시도 횟수 공백           | 횟수: `' '`                              | `[ERROR] 시도 횟수는 숫자여야 합니다.`                      |
| 시도 횟수 음수           | 횟수: `'-1'`                             | `[ERROR] 시도 횟수는 음수일 수 없습니다.`                   |
