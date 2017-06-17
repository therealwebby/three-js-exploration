import AppScene from './js/scene';
import Lighting from './js/lighting';

class App {
  constructor() {
    this._addListeners();
  }

  _addListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.mainScene = new AppScene();
      this.lighting = new Lighting(this.mainScene);
    });
  }
}

const app = new App(); // eslint-disable-line no-unused-vars
