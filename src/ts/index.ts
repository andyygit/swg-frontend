import { subscriber, createSignal, createEffect } from './helpers/Signal.js';
import { router, navigateTo } from './helpers/Router.js';

// const app = document.getElementById('app') as HTMLDivElement;
// const loginBtn = document.querySelector('button') as HTMLButtonElement;

// const [state, setState] = createSignal(0);

// createEffect(() => console.log(state()));
// createEffect(() => {
//   let out = state();
//   app.innerHTML = `${out} -- ${out * 2} -- ${out * 10}`;
// });

// loginBtn.addEventListener('click', () => {
//   setState(state() + 1);
// });
