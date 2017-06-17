import { DirectionalLight as DirLight } from 'three';

export default class DirectionalLight {
  constructor(x, y, z, intensity) {
    this.light = new DirLight(0xffffff, intensity);
    this.light.castShadow = true;
    this.light.position.set(x, z, y);

    this._setCameraSettings();
    this._setShadowResolution();
  }

  _setCameraSettings() {
    this.light.shadow.camera.left = -400;
    this.light.shadow.camera.right = 400;
    this.light.shadow.camera.top = 400;
    this.light.shadow.camera.bottom = -400;
    this.light.shadow.camera.near = 1;
    this.light.shadow.camera.far = 1000;
  }

  _setShadowResolution() {
    this.light.shadow.mapSize.width = 2048;
    this.light.shadow.mapSize.height = 2048;
  }
}
