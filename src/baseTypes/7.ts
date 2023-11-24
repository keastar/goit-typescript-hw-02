/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
//1`st variant
enum WeekDay {
  Mon = 'Monday',
  Tus = 'Tuesday ',
  Wen = 'Wednesday ',
  Thus = 'Thursday ',
  Fri = 'Friday',
  Sat = 'Saturday',
  Sun = 'Sunday',
}

function isWeekender(day: WeekDay): boolean {
  return day === WeekDay.Sat || day === WeekDay.Sun;
}