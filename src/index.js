// const refs = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]'),
// };

class CountdownTimer {
  constructor({ targetDate, selectorTimer }) {
    this.selectorTimer = document.querySelector(selectorTimer);
    // console.log(this.selectorTimer);
    this.targetDate = targetDate;
    // this.onTick = onTick;
    this.refs = {
      days: this.selectorTimer.querySelector('[data-value="days"]'),
      hours: this.selectorTimer.querySelector('[data-value="hours"]'),
      mins: this.selectorTimer.querySelector('[data-value="mins"]'),
      secs: this.selectorTimer.querySelector('[data-value="secs"]'),
    };

    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      // const deltaTime = currentTime - this.targetDate;
      // const time = this.timeConverter(Math.abs(deltaTime));
      const deltaTime = this.targetDate - currentTime;
      const time = this.timeConverter(deltaTime);

      // this.onTick(time);
      this.updateClock(time);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  timeConverter = time => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  };

  updateClock({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
}

const timer = new CountdownTimer({
  selectorTimer: '#timer-1',
  targetDate: new Date('Aug 31, 2021'),
  // onTick: updateClock,
});

// function updateClock({ days, hours, mins, secs }) {
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;
// }
