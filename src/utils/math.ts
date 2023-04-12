export function clamp(value: number, min = 0, max = 100): number {
  return Math.min(Math.max(value, min), max);
}

export function random(min = 0, max = 10000) {
  return Math.floor(Math.random() * max) + min;
}
