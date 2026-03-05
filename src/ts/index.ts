let subscriber: Function | null = null;
const createSignal = <T>(initialValue: T): [() => T, (value: T) => void] => {
  let _value = initialValue;
  const _subscribers = new Set<Function>();

  const read = () => {
    if (subscriber && !_subscribers.has(subscriber)) {
      _subscribers.add(subscriber);
    }
    return _value;
  };
  const write = (newValue: T): void => {
    if (newValue === _value) return;
    _value = newValue;
    for (const _sub of [..._subscribers]) {
      (_sub: () => any) => _sub();
    }
  };
  return [read, write];
};

const createEffect = (cb: Function) => {
  subscriber = cb;
  cb();
  subscriber = null;
};

type User = {
  username: string;
  fullname: string;
  age: number;
};

const [state, setState] = createSignal<User>({
  username: 'guest',
  fullname: 'guest',
  age: 30,
});

const btn = document.querySelector('button') as HTMLButtonElement;
const userDiv = document.getElementById('user') as HTMLDivElement;
const nameDiv = document.getElementById('name') as HTMLDivElement;
const ageDiv = document.getElementById('age') as HTMLDivElement;

createEffect(() => {
  userDiv.innerHTML = state().username;
  nameDiv.innerHTML = state().fullname;
  ageDiv.innerHTML = state().age.toString();
});

btn.addEventListener('click', () => {
  setState({
    username: 'admin',
    fullname: 'admin',
    age: 50,
  });
  console.log(state());
});

console.log(subscriber);
