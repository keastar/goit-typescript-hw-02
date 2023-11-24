/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {
  }
  // pageInfo(): T {
  //     return this.props;
  //   }
}

class Page extends Component<Props> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};