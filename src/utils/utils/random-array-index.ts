export function randomArrayIndex<T>(data: readonly T[]) {
  return Math.floor(Math.random() * data.length);
}
