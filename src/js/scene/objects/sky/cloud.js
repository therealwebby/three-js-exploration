import { BoxGeometry, Object3D, Mesh, MeshPhongMaterial } from 'three';
import COLOURS from '../../../colours';

export default class Cloud {
  constructor() {
    this.mesh = new Object3D();
    this.mesh.name = 'cloud';

    this.cubeGeometry = new BoxGeometry(20, 20, 20);
    this.cubeMaterial = new MeshPhongMaterial({
      color: COLOURS.blue
    });

    this._buildCloud();
  }

  _buildCloud() {
    const cloudSize = 3 + Math.floor(Math.random() * 3);

    for (let i = 0; i < cloudSize; i++) {
      const cubeMesh = new Mesh(this.cubeGeometry.clone(), this.cubeMaterial);

      cubeMesh.position.x = i * 15;
      cubeMesh.position.y = Math.random() * 10;
      cubeMesh.position.z = Math.random() * 10;
      cubeMesh.rotation.z = Math.random() * Math.PI * 2;
      cubeMesh.rotation.y = Math.random() * Math.PI * 2;

      const randomScale = 0.1 + (Math.random * 0.9);
      cubeMesh.scale.set(randomScale, randomScale, randomScale);

      cubeMesh.castShadow = true;
      cubeMesh.receiveShadow = true;

      this.mesh.add(cubeMesh);
    }
  }
}
