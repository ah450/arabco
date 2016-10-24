angular.module('arabco', ['ui.router', 'ui.router.title',
    'arabcoTemplates', 'ngAnimate']);

angular.module('arabco').config(function($compileProvider) {
  return $compileProvider.debugInfoEnabled(false);
});

angular.module('arabco').config(function($urlMatcherFactoryProvider) {
  return $urlMatcherFactoryProvider.strictMode(false);
});