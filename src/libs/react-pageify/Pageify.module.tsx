export const easeInOutCubic = (
  currentTime: number,
  startValue: number,
  changeInValue: number,
  duration: number
) => {
  const time = currentTime / duration - 1
  const timeCubic = time * time * time
  return changeInValue * (timeCubic + 1) + startValue
}
