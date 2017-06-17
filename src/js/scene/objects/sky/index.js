import { Object3D } from 'three';
import Cloud from './cloud';

export default class Sky {
  constructor() {
    this.mesh = new Object3D();
    this.numberOfClouds = 20;
    this.stepAngle = Math.PI * (2 / this.numberOfClouds);

    this._addCloudsToSky();
  }

  _addCloudsToSky() {
    for (let i = 0; i < this.numberOfClouds; i++) {
      const cloud = new Cloud();
      const cloudAngle = this.stepAngle * i;
      const distanceFromCenter = 750 + (Math.random() * 200);

      cloud.mesh.position.y = Math.sin(cloudAngle) * distanceFromCenter;
      cloud.mesh.position.x = Math.cos(cloudAngle) * distanceFromCenter;
      cloud.mesh.position.z = -400 - (Math.random() * 400);

      cloud.mesh.rotation.z = cloudAngle + (Math.PI / 2);

      const randomScale = 1 + (Math.random * 2);
      cloud.mesh.scale.set(randomScale, randomScale, randomScale);

      this.mesh.add(cloud.mesh);
    }
  }
}
