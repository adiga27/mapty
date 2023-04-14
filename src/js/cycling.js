import Workout from './workout.js';

export default class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = +(this.distance / (this.duration / 60)).toFixed(2); // in km/hr
    return this.speed;
  }
}
