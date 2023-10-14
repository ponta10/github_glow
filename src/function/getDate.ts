import dayjs from 'dayjs';

export function getDate() {
  const today = dayjs();
  const oneYearAgo = dayjs().subtract(1, 'year');

  const formattedToday = today.format('YYYY-MM-DDTHH:mm:ss');
  const formattedOneYearAgo = oneYearAgo.format('YYYY-MM-DDTHH:mm:ss');

  return {
    today: formattedToday,
    oneYearAgo: formattedOneYearAgo,
  };
}
