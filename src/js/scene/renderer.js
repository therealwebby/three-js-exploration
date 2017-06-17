import { WebGLRenderer } from 'three';

export default class Renderer {
  constructor(width, height) {
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true
    });

    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;

    const container = document.getElementById('world');
    container.appendChild(this.renderer.domElement);
  }

  updateDimensions(width, height) {
    this.renderer.setSize(width, height);
  }
}
