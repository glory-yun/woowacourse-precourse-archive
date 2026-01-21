import Controller from "./Controller.js";

class App {
  async run() {
    // 컨트롤러 생성
    const controller = new Controller();
    // 컨트롤러 실행
    await controller.start();
  }
}

export default App;
