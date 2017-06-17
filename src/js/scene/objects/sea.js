import { CylinderGeometry, FlatShading, Matrix4, Mesh, MeshPhongMaterial } from 'three';
import COLOURS from '../../colours';

export default class Sea {
  constructor() {
    this.geometry = new CylinderGeometry(600, 600, 800, 40, 10);
    this.geometry.applyMatrix(new Matrix4().makeRotationX(-Math.PI / 2));

    this.material = new MeshPhongMaterial({
      color: COLOURS.blue,
      transparent: true,
      opacity: 0.6,
      shading: FlatShading
    });

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.receieveShadow = true;
  }
}
