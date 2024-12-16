export const convertTime = (estimetedTime: string) => {
  const num = Number(estimetedTime);
  return Math.floor(num / 60);
};
