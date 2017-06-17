import HemisphereLight from './hemisphere-light';

export default class Lighting {
  constructor(mainScene) {
    this.backgroundLight = new HemisphereLight(0xaaaaaa, 0x000000, 0.9);
    mainScene.scene.add(this.backgroundLight.light);
  }
}
