angular.module('arabco').config(function($stateProvider) {
    var publicState = {
        name: 'public',
        abstract: true,
        views: {
            '@': {
                templateUrl: 'views/public.html'
            }
        }
    };

    var homeState = {
        name: 'public.home',
        url: '',
        views: {
            'main-content': {
                templateUrl: 'views/home.html'
            }
        }
    };

    var whoWeAre = {
        name: 'public.who_we_are',
        url: '/who_we_are',
        views: {
            'main-content': {
                templateUrl: 'views/who_we_are.html'
            }
        }
    };

    var whatWeDo = {
        name: 'public.what_we_do',
        url: '/what_we_do',
        views: {
            'main-content': {
                templateUrl: 'views/what_we_do.html'
            }
        }
    };

    var careers = {
        name: 'public.careers',
        url: '/careers',
        views: {
            'main-content': {
                templateUrl: 'views/careers.html'
            }
        }
    };

    var contactUs = {
        name: 'public.contact_us',
        url: '/contact',
        views: {
            'main-content': {
                templateUrl: 'views/contact.html'
            }
        }
    };

    $stateProvider
        .state(publicState)
        .state(homeState)
        .state(whoWeAre)
        .state(whatWeDo)
        .state(careers)
        .state(contactUs);
});