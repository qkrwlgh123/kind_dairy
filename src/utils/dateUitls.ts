/** Date => 연-월-일 문자열로 환환 */
export const convertDateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/** Date => 연-월 문자열로 환환 */
export const convertDateToMonthString = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${year}-${month}`;
};
