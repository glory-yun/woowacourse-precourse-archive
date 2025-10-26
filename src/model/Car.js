import { DEFAULT_POSITION } from "../constants/CarConstants.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = DEFAULT_POSITION;
  }

  move() {
    this.#position++;
  }
  getName() {
    return this.#name;
  }
  getPosition() {
    return this.#position;
  }
}

export default Car