export const convertTime = (estimetedTime: string) => {
  const num = Number(estimetedTime);
  return Math.floor(num / 60);
};

export const convertDateFormatt = (isoDate: string) => {
  const date = new Date(isoDate);

  const formattedDate = date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\./g, ".");
  return formattedDate.slice(0, -1);
};

export const formatPrice = (price: number): string => {
  if (isNaN(price)) {
    throw new Error("Invalid number input");
  }
  return price.toLocaleString("ko-KR") + "원";
};
