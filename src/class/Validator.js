import Personality from "./personality.js";

export default class Validator extends Personality {

  constructor(name, type) {
    super(name, type);
  }

  validateUserName() {
    const regularName = /^[a-zA-Z0-9_-]+$/;

    if (
      regularName.test(this.name) &&
      !/\d{4,}/.test(this.name) &&
      !/^\d|[\d_-]$/.test(this.name)
    ) {
      return this.name;
    } else {
      throw new Error('перепишите имя');
    }
  }
}