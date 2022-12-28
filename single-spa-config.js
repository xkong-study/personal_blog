// single-spa-config.js
import { registerApplication, start } from 'single-spa';
// Simple usage
registerApplication(
  'personal_blog',
  () => import('src/App.jsx'),
  (location) => location.pathname.startsWith('personal_blog'),
  { some: 'value' }
);
// Config with more expressive API
registerApplication({
  name: 'app1',
  app: () => import('src/app1/main.js'),
  activeWhen: '/app1',
  customProps: {
    some: 'value',
  }
);
start();
