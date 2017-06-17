import HemisphereLight from './hemisphere-light';
import DirectionalLight from './directional-light';

export default class Lighting {
  constructor(scene) {
    this.backgroundLight = new HemisphereLight(0xaaaaaa, 0x000000, 0.9).light;
    this.shadowLight = new DirectionalLight(150, 350, 350, 0.9).light;

    scene.add(this.backgroundLight);
    scene.add(this.shadowLight);
  }
}
