/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// enum WeekDay {
//   Mon = 'Monday',
//   Tus = 'Tuesday ',
//   Wen = 'Wednesday ',
//   Thus = 'Thursday ',
//   Fri = 'Friday',
//   Sat = 'Saturday',
//   Sun = 'Sunday',
// }

// type WeekendDay = {
//   [WeekDay.Mon]: {
//     boolean: () => false;
//   };
//   [WeekDay.Tus]: {
//     boolean: () => false;
//   };
//   [WeekDay.Wen]: {
//     boolean: () => false;
//   };
//   [WeekDay.Thus]: {
//     boolean: () => false;
//   };
//   [WeekDay.Fri]: {
//     boolean: () => false;
//   };
//   [WeekDay.Sat]: {
//     boolean: () => true;
//   };
//   [WeekDay.Sun]: {
//     boolean: () => true;
//   };
// };

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
  
  
  
  
  
  let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first: string, second: number) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"

export {};
  
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