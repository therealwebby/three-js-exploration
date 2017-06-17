import { Scene, Fog } from 'three';
import Camera from './camera';
import Renderer from './renderer';
import Lighting from './lighting';
import Sea from './objects/sea';

export default class AppScene {
  constructor() {
    this._setBrowserDimensions();
    this._setupScene();
    this._setupCamera();
    this._addRenderer();
    this._addLighting();
    this._addObjects();

    this._addListeners();

    this.renderer.render(this.scene, this.camera);
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
    this.camera = new Camera(0, 100, 200, this.aspectRatio).camera;
  }

  _addRenderer() {
    this.renderer = new Renderer(this.width, this.height).renderer;
  }

  _addLighting() {
    this.lighting = new Lighting(this.scene);
  }

  _addObjects() {
    const sea = new Sea();
    sea.mesh.position.y = -600;
    this.scene.add(sea.mesh);
  }

  _addListeners() {
    window.addEventListener('resize', () => {
      this._setBrowserDimensions();
      this.camera.updateDimensions(this.aspectRatio);
      this.renderer.updateDimensions(this.width, this.height);
    }, false);
  }
}
