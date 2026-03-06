import Abstractview from '../views/Abstractview.js';
import HomeView from '../views/Home.js';

type Route = {
  path: string;
  view: typeof Abstractview;
};

const router = async () => {
  const routes: Route[] = [
    {
      path: '/',
      view: HomeView,
    },
  ];
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
  if (typeof match === 'undefined') {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();
  document.getElementById('app').innerHTML = await view.getHtml();
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

export { router, navigateTo };
