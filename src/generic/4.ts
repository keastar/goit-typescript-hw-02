/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface T {
  title: string;
}

class Component<T> {
  constructor(public props: T) {
  }
  // pageInfo(): T {
  //     return this.props;
  //   }
}

class Page extends Component<T> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};