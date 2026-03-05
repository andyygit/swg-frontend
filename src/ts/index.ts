const btn = document.querySelector('button') as HTMLButtonElement;
const userDiv = document.getElementById('user') as HTMLDivElement;
const nameDiv = document.getElementById('name') as HTMLDivElement;
const ageDiv = document.getElementById('age') as HTMLDivElement;

let subscriber: Function | null = null;

const createSignal = <T>(initialValue: T): [() => T, (value: T) => void] => {
  let _value = initialValue;
  const _subscriptions = new Set<Function>();

  const read = () => {
    if (subscriber && !_subscriptions.has(subscriber)) {
      _subscriptions.add(subscriber);
    }
    return _value;
  };
  const write = (newValue: T): void => {
    if (newValue === _value) return;
    _value = newValue;
    _subscriptions.forEach((cb) => cb());
  };
  return [read, write];
};

const createEffect = (cb: Function) => {
  subscriber = cb;
  cb();
  subscriber = null;
};

const [state, setState] = createSignal(0);

createEffect(() => console.log(state()));
createEffect(() => {
  userDiv.innerHTML = `${state()}`;
  nameDiv.innerHTML = `${state() * 2}`;
  ageDiv.innerHTML = `${state() * 10}`;
});

btn.addEventListener('click', () => {
  setState(state() + 1);
});
