/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  //Значення деякі за замовченням:
  const defaultUser: User = {
    name: '***', // Мається на увазі, що данні записані)
    surname: '*******', // Поля запоінені строчними даними
    email: '**********', // Поля запоінені строчними даними
    password: '**********', // Поля запоінені строчними даними
  };
  // З'єднуємо дані користувача та значення за замовченням:
  return {...defaultUser, ...initialValues}
}

createOrUpdateUser({email: 'user@mail.com', password: 'password123' });

export {};