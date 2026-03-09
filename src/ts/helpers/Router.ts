import Abstractview from '../views/Abstractview.js';
import HomeView from '../views/Home.js';
import LoginView from '../views/Login.js';
import RegisterView from '../views/Register.js';

type Route = {
  path: string;
  view: typeof Abstractview;
};

type PotentialMatch = {
  route: Route;
  isMatch: boolean;
};

const router = async () => {
  const app = document.getElementById('app')!;
  const routes: Route[] = [
    {
      path: '/',
      view: HomeView,
    },
    {
      path: '/login',
      view: LoginView,
    },
    {
      path: '/register',
      view: RegisterView,
    },
  ];
  const potentialMatches: PotentialMatch[] = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((potMatch) => potMatch.isMatch);
  if (typeof match === 'undefined') {
    match = {
      route: routes[0]!,
      isMatch: true,
    };
  }

  const view = new match.route.view();
  while (app.firstElementChild && app.lastElementChild) {
    app.lastElementChild.remove();
  }
  const renderResult: HTMLElement = await view.getHtml();
  app.appendChild(renderResult);
};

const navigateTo = (url: string) => {
  history.pushState(null, '', url);
  router();
};

export { router, navigateTo };
