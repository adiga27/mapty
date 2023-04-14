import Workout from './workout.js';

export default class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = +(this.duration / this.distance).toFixed(2); // in min/km
    return this.pace;
  }
}
