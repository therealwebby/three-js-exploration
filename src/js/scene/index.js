import Camera from './camera';
import Renderer from './renderer';
import { Scene, Fog } from 'three';

export default class AppScene {
  constructor() {
    this._setBrowserDimensions();
    this._setupScene();
    this._setupCamera();
    this._addRenderer();
    this._addListeners();
  }

  _setBrowserDimensions() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.aspectRatio = this.width / this.height;
  }

  _setupCamera() {
    this.camera = new Camera(0, 100, 200, this.aspectRatio);
  }

  _setupScene() {
    this.scene = new Scene;
    this.scene.fog = new Fog(0xf7d9aa, 100, 950);
  }

  _addRenderer() {
    this.renderer = new Renderer(this.width, this.height);
  }

  _addListeners() {
    window.addEventListener('resize', () => {
      this._setBrowserDimensions();
      this.camera.updateDimensions(this.aspectRatio);
      this.renderer.updateDimensions(this.width, this.height);
    }, false)
  }
}
