const englishMonthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];

const getNewDate =  (date) => {
 let year = date.getFullYear();
 let month = date.getMonth();
 let day = date.getDate();
 return {year, month, day};
}

const getDate = (year, month, day) => {
  return new Date(year, month, day);
}

const englishMonth = (month) => {
  let engMonth;

  englishMonthList.map(() => {
    engMonth = englishMonthList[month]
  });

  return engMonth
}

const formatDate = (date) => {
  date = Number(date);
  return date < 10? `0${date}`:date;
}
export {
  getNewDate,
  getDate,
  englishMonth,
  formatDate
}