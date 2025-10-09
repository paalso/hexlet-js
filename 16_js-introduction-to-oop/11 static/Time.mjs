export default class Time {
  // BEGIN (write your solution here)
  // const time = Time.fromString('10:23');
  static fromString(time) {
    const [hours, minutes] = time.split(":");
    return new Time(hours, minutes);
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
