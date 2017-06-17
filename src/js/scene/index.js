import { Scene, Fog } from 'three';
import Camera from './camera';
import Renderer from './renderer';
import Lighting from './lighting';

export default class AppScene {
  constructor() {
    this._setBrowserDimensions();
    this._setupScene();
    this._setupCamera();
    this._addRenderer();
    this._addLighting();

    this._addListeners();
  }

  _setBrowserDimensions() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.aspectRatio = this.width / this.height;
  }

  _setupScene() {
    this.scene = new Scene();
    this.scene.fog = new Fog(0xf7d9aa, 100, 950);
  }

  _setupCamera() {
    this.camera = new Camera(0, 100, 200, this.aspectRatio);
  }

  _addRenderer() {
    this.renderer = new Renderer(this.width, this.height);
  }

  _addLighting() {
    this.lighting = new Lighting(this.scene);
  }

  _addListeners() {
    window.addEventListener('resize', () => {
      this._setBrowserDimensions();
      this.camera.updateDimensions(this.aspectRatio);
      this.renderer.updateDimensions(this.width, this.height);
    }, false);
  }
}
