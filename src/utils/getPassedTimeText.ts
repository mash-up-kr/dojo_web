import dayjs from "dayjs";

export const getPassedTimeText = (date: string): string => {
  const now = dayjs();
  const inputDate = dayjs(date);

  const diff = now.diff(inputDate, "minute");

  if (diff < 1) {
    return "방금 전";
  }
  if (diff < 60) {
    return `${diff}분 전`;
  }
  if (diff < 60 * 24) {
    return `${Math.round(diff / 60)}시간 전`;
  }
  return `${Math.round(diff / 60 / 24)}일 전`;
};
