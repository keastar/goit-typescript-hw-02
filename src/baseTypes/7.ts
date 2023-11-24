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

type DaysAreWeekend = Record<WeekDay, boolean>;

const DayIsWeekend: DaysAreWeekend = {
  [WeekDay.Mon]: false,
  [WeekDay.Tus]: false,
  [WeekDay.Wen]: false,
  [WeekDay.Thus]: false,
  [WeekDay.Fri]: false,
  [WeekDay.Sat]: true,
  [WeekDay.Sun]: true,
}

function isWeekender(WeekDay: string) {
  return DayIsWeekend;
}

//2`nd variant

type Day = {
  isWeekend: boolean;
  name: string;
};

const isWeekend = (days: Day[]): boolean[] => {
  return days.map((day) => day.isWeekend);
};

const days: Day[] = [
  { isWeekend: false, name: 'Monday' },
  { isWeekend: false, name: 'Tuesday' },
  { isWeekend: false, name: 'Wednesday' },
  { isWeekend: false, name: 'Thursday' },
  { isWeekend: false, name: 'Friday' },
  { isWeekend: true, name: 'Saturday' },
  { isWeekend: true, name: 'Sunday' },

];

let result = isWeekend(days);
console.log(result); // [false, false, false, false, false, true, true]
export { };
  
  
  
  
  
//   let myFunc: (firstArg: string, secondArg: number) => void;

// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"

// export {};
  
// type User = {
//   id: number;
//   name: string;
// };

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name);
// };

// const users: User[] = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ];

// let result = getUserNames(users);
// console.log(result); // ['Alice', 'Bob', 'Charlie']

// export {};{

// }