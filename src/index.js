import AppScene from './js/scene';

class App {
  constructor() {
    this._addListeners();
  }

  _addListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.mainScene = new AppScene();
    });
  }
}

const app = new App(); // eslint-disable-line no-unused-vars
