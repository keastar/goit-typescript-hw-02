/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type statuses = 'open' | 'close';

type Pages = {
  title: string;
  likes: number;
  accounts: Array<string>;
  status: statuses;
}

type DetailsIs = {
   details: {
    createAt: Date;
    updateAt: Date;
  }
}

type PagesAll = Pages & DetailsIs;

const page1: PagesAll = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Pages = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};