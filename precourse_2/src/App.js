import RacingController from './controller/RacingController.js';

class App {
  async run() {
    await new RacingController().start();
  }
}

export default App;
