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

export { subscriber, createSignal, createEffect };
