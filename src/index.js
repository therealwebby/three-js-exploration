import AppScene from './js/scene';

class App {
  constructor() {
    this._addListeners();
  }

  _addListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.appScene = new AppScene;
    });
  }
}

const app =  new App;
