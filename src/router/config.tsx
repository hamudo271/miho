import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const NonBenefitPage = lazy(() => import('../pages/home/NonBenefitPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/non-benefit',
    element: <NonBenefitPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
