export const determineStyle = (bbox: number[], ratio: number) => {
  const [x1, y1, x2, y2] = bbox;

  const width = (x2 - x1) * ratio;
  const height = (y2 - y1) * ratio;
  const left = x1 * ratio;
  const top = y1 * ratio;

  return {
    width,
    height,
    left,
    top,
  }
}
