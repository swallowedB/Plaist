export const convertDateFormatt = (isoDate: string) => {
  const date = new Date(isoDate);

  const formattedDate = date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\./g, ".");
  return formattedDate;
};
