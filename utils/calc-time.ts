export function calcTime(time: number) {
  const currentTime = Math.floor(Date.now() / 1000);
  const elapsed = time - currentTime;

  if (elapsed <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(elapsed / (60 * 60 * 24));
  const hours = Math.floor(elapsed % (60 * 60 * 24) / (60 * 60));
  const minutes = Math.floor(elapsed % (60 * 60) / 60);
  const seconds = Math.floor(elapsed % 60);

  return { days, hours, minutes, seconds };
}

export function timerIsZero(time: number) {
  const currentTime = Math.floor(Date.now() / 1000);
  const elapsed = time - currentTime;
  return elapsed <= 0;
}
