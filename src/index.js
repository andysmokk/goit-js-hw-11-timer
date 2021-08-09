const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ targetDate, onTick }) {
    this.targetDate = targetDate;
    this.onTick = onTick;

    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      // const deltaTime = currentTime - this.targetDate;
      // const time = this.timeConverter(Math.abs(deltaTime));
      const deltaTime = this.targetDate - currentTime;
      const time = this.timeConverter(deltaTime);

      this.onTick(time);
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
}

const timer = new CountdownTimer({
  targetDate: new Date('Aug 31, 2021'),
  onTick: updateClock,
});

function updateClock({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
