import { HemisphereLight } from 'three';

export default class HemLight {
  constructor(colourFrom, colourTo, intensity) {
    this.light = new HemisphereLight(colourFrom, colourTo, intensity);
  }
}
