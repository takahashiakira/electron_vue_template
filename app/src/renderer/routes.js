export default [
  {
    path: '/',
    name: 'home',
    component: require('components/LandingPageView/LandingPageView'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
