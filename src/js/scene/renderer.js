import { WebGLRenderer } from 'three';

export default class Renderer {
  constructor(width, height) {
    this.instance = new WebGLRenderer({
      alpha: true,
      antialias: true
    });

    this.instance.setSize(width, height);
    this.instance.shadowMap.enabled = true;

    const container = document.getElementById('world');
    container.appendChild(this.instance.domElement);
  }

  updateDimensions(width, height) {
    this.instance.setSize(width, height);
  }
}
