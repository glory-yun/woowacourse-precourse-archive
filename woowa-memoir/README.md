# 우아한 회고록 (Woowa Memoir)

> 하루를 **구조적으로 회고**할 수 있는 웹 서비스
> 
> [웹 사이트 링크](https://woowa-memoir.netlify.app)
>

<br>

## 프로젝트 소개

우아한 테크코스 프리코스를 진행하며 자연스럽게 생겨나는 고민 —
"회고를 어떻게 쓰지?" "어디에 정리해야 하지?"

이 프로젝트 우아한 회고록은 이런 고민을 가진 사람들을 위해 만들어졌습니다.
프리코스 과정에서 많은 이들이 매일 학습을 기록하고 싶어 했지만, 어떻게 작성해야할지 몰라 
작성을 포기하는 경우가 많았습니다.

우아한 회고록은 이런 문제를 해결하기 위한, 프리코스 참가자들을 위한 회고 기록 서비스입니다.

- 회고를 쉽게 작성하고 저장할 수 있는 직관적인 UI
- 날짜별로 회고를 정리해서 확인할 수 있는 구조
- 간단한 저장 기능으로 동료와 회고를 쉽게 나눌 수 있음

프리코스를 진행하며 배운 점, 고민했던 점, 성장의 흔적을
어떻게 작성할 고민 필요 없이 빠르고 편하게 기록해 보세요.

<br>


## 주요 기능

- **회원 관리**
  - 회원가입: 사용자명, 비밀번호, email 입력을 받아 저장
  - 로그인: 사용자명/비밀번호 검증 후 `userId`, `username` 반환
  - localstorage에 사용자의 정보를 보관하여 회고록의 작성, 수정, 삭제에 사용

- **회고 작성**
  - 회고록의 제목과 내용을 입력받음
  - 입력된 내용이 있을 경우에만 작성 가능하도록 구현
  - 기본 3개의 section이 있으며, 필요시 추가하여 작성 가능

- **회고 수정**
  - 회고의 작성자와 현재 로그인한 사용자를 비교해, 본인이 작성한 회고만 수정할 수 있도록 제한
  - 기존에 작성된 회고를 불러와 입력 Form에 채운 뒤, 내용을 수정하고 다시 저장

- **회고 삭제**
  - 회고의 작성자와 현재 로그인한 사용자를 비교해, 본인이 작성한 회고만 삭제 가능하도록 제한
  - 선택한 회고를 DB에서 완전히 삭제

- **회고 출력**
  - 사용자가 작성한 회고들을 최신순으로 정렬하여 카드 형태로 출력
  - 현재 로그인한 사용자의 회고를 필터링하여 `나만의 회고록` 기능 구현
  - 카드 클릭시, 해당 회고 Id의 상세내역으로 이동
- **회고 상세 내역**
  - 작성 날짜, 회고의 제목, 내용을 출력
  - card 형태로 내용을 보여줌

- **예외 처리**
  - ErrorCode 열거형에 회고 미존재, 권한 없음, 사용자 중복/미존재, 비밀번호 오류 등을 정의하고, CustomException으로 던짐.
  - 에러 발생시 사용자에게 출력

<br>

## 시연 영상
[![Video Label](https://github.com/user-attachments/assets/fb678abd-a9e9-424a-9b44-b94ca69aa145)](https://youtu.be/nNrrH7OCUqo)

<br>

## 실행 흐름

1. `index.html` → 즉시 `/Pages/user/login.html`로 이동
2. 사용자가 로그인 폼 제출 (`login.js`)
   - `getUserApi.js` → `/signin`
   - 성공 시 `dataStorage.js`가 `userId`, `username`을 LocalStorage에 저장
   - `route.js`가 회고 목록 페이지로 이동
3. `memoirList.html`
   - `/memoir` 목록 Fetch → `Components/memoirListTemplate.js`로 렌더링
   - “새 글 작성” 버튼 → `memoirWrite.html`
4. `memoirWrite.html`
   - `buildMemoirData.js`가 폼 입력을 DTO 구조로 변환
   - `saveMemoir` API 호출 성공 시 목록으로 리다이렉트
5. `memoirDetail.html`
   - URL의 `id` 파라미터로 상세 조회
   - 수정 → `memoirModify.html`, 삭제 → `/memoir?id=...` DELETE
6. `memoirMyList.html`
   - LocalStorage의 `userId`를 헤더에 실어 `/memoir/mymemoir` 호출
   - 내 회고만 리스트업

<br>

## 폴더 구조

```
woowacourse-precourse-open-mission/
├── backend/
│   └── open-mission/
│       ├── build.gradle
│       ├── gradlew
│       ├── gradlew.bat
│       ├── settings.gradle
│       ├── gradle/
│       │   └── wrapper/
│       │       ├── gradle-wrapper.jar
│       │       └── gradle-wrapper.properties
│       └── src/
│           ├── main/
│           │   ├── java/woowatech/open_mission/
│           │   │   ├── OpenMissionApplication.java
│           │   │   ├── global/
│           │   │   │   ├── config/Config.java
│           │   │   │   └── exception/
│           │   │   │       ├── CustomException.java
│           │   │   │       ├── ErrorCode.java
│           │   │   │       ├── ErrorResponse.java
│           │   │   │       └── GlobalExceptionHandler.java
│           │   │   ├── memoir/
│           │   │   │   ├── controller/MemoirController.java
│           │   │   │   ├── domain/{Memoir, Contents, Section}.java
│           │   │   │   ├── dto/{MemoirRequestDto, MemoirResponseDto, MemoirSummaryDto, ContentsDto, SectionDto}.java
│           │   │   │   ├── mapper/MemoirMapper.java
│           │   │   │   ├── repository/MemoirContainer.java
│           │   │   │   └── service/MemoirService.java
│           │   │   └── user/
│           │   │       ├── controller/UserController.java
│           │   │       ├── domain/User.java
│           │   │       ├── dto/{LoginRequestDto, LoginResponseDto, UserRequestDto}.java
│           │   │       ├── mapper/UserMapper.java
│           │   │       └── repository/UserContainer.java
│           │   └── resources/application.properties
│           └── test/java/woowatech/open_mission/OpenMissionApplicationTests.java
└── frontend/
    ├── index.html
    ├── config.js
    ├── Pages/
    │   ├── user/
    │   │   ├── login.html
    │   │   └── signup.html
    │   └── memoir/
    │       ├── memoirList.html
    │       ├── memoirDetail.html
    │       ├── memoirWrite.html
    │       ├── memoirModify.html
    │       └── memoirMyList.html
    ├── JS/
    │   ├── login.js
    │   ├── signup.js
    │   ├── memoirList.js
    │   ├── memoirMyList.js
    │   ├── memoirDetail.js
    │   ├── memoirWrite.js
    │   ├── memoirModify.js
    │   ├── buttonSetting.js
    │   ├── loadMemoirForm.js
    │   └── memoirSectionHandler.js
    ├── API/
    │   ├── getUserApi.js
    │   └── getMemoirApi.js
    ├── Components/
    │   ├── card.js
    │   ├── memoirListTemplate.js
    │   ├── memoirSection.js
    │   └── navbar.js
    └── util/
        ├── buildMemoirData.js
        ├── dataStorage.js
        ├── getDate.js
        └── route.js
├── README.md
└── run.sh
```
<br>

## 기술 스택

### Backend
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![EC2](https://img.shields.io/badge/EC2-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![RDS](https://img.shields.io/badge/RDS-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

### Frontend
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)	


<br>

## 시스템 구조

```
┌─────────────────────────────┐                                    ┌─────────────────────────────┐
│         Browser UI           │                                    │     Spring Boot Backend     │
│ ─────────────────────────── │  Fetch (GET/POST/PUT/DELETE)       │ ─────────────────────────── │
│ Pages/                      │  /signin, /memoir, /memoir/mymemoir │ Controllers                 │
│  - login.html               │ ─────────────────────────────────▶ │  - UserController           │
│  - memoirList.html          │                                   │  - MemoirController         │
│  - memoirDetail.html        │                                   │                             │
│ JS/                         │ ◀───────────────────────────────── │ Services                    │
│  - login.js                 │  JSON 응답 (LoginResponseDto,      │  - UserService              │
│  - memoirList.js            │   MemoirSummaryDto, MemoirResponse)│  - MemoirService            │
│  - memoirDetail.js          │                                   │                             │
│ API/                        │                                   │ DTO & Mapper                │
│  - getUserApi.js            │                                   │  - LoginRequest/ResponseDto │
│  - getMemoirApi.js          │                                   │  - MemoirRequest/ResponseDto│
│ util/                       │                                   │  - MemoirMapper             │
│  - route.js                 │                                   │                             │
│  - dataStorage.js           │                                   │ Repositories (JPA)          │
│ LocalStorage/SessionStorage │                                   │  - UserContainer            │
│  - userId / username        │                                   │  - MemoirContainer          │
│  - 최근 조회 회고            │                                    └──────────┬──────────────────┘
└──────────────┬──────────────┘                                               │
               │                                                              │ JDBC (MySQL Connector)
               ▼                                                              ▼
        ┌─────────────────────┐                                   ┌─────────────────────────────┐
        │     HTTP Headers    │                                   │         MySQL DB            │
        │  - Content-Type     │                                   │  Tables:                    │
        │  - user-id (필수)   │                                   │   - user                   │
        │                     │                                   │   - memoir                 │
        └─────────────────────┘                                   │   - contents               │
                                                                 │   - section                │
                                                                 └─────────────────────────────┘

```

<br>


## 향후 개선

- 비밀번호 암호화 + JWT 등 인증 강화
- 회고 검색/필터, 태그, 페이징 도입
- 다양한 섹션 템플릿 및 UI 커스터마이즈
- 반응형 디자인 및 다크 모드
- Docker Compose로 DB/백엔드/프론트 통합 실행
- 에러 메시지 국제화, 사용자 프로필 관리
- github action을 활용한 배포 자동화 파이프라인 구성

<br>
