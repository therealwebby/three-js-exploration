import { PerspectiveCamera } from 'three';

export default class Camera {
  constructor(x, y, z, aspectRatio) {
    const fieldOfView = 60;
    const nearPlane = 1;
    const farPlane = 1000;

    this.camera = new PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );

    this.camera.position.x = x;
    this.camera.position.z = z;
    this.camera.position.y = y;
  }

  updateDimensions(aspectRatio) {
    this.camera.aspect = aspectRatio;
    this.camera.updateProjectionMatrix();
  }
}
