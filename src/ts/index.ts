import { createSignal, createEffect } from './helpers/Signal.js';
import { router, navigateTo } from './helpers/Router.js';

addEventListener('popstate', router);
addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const closest = target.closest('a')!;
    if (target.localName === 'a' && target.dataset.link !== undefined) {
      e.preventDefault();
      navigateTo((target as HTMLAnchorElement).href);
    } else if (closest && closest.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(closest.href);
    }
  });
  router();
});

// const app = document.getElementById('app')!;
// const loginBtn = document.querySelector('button')!;

// const [state, setState] = createSignal(0);

// createEffect(() => console.log(state()));
// createEffect(() => {
//   let out = state();
//   app.innerHTML = `${out} -- ${out * 2} -- ${out * 10}`;
// });

// loginBtn.addEventListener('click', () => {
//   setState(state() + 1);
// });

const session = localStorage.getItem('session');

if (!session) {
  navigateTo('/login');
}
